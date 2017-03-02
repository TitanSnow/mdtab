;(function(global,undefined){
	"use strict"
	marked.setOptions({
		"highlight":function(code,lang){
			try{return hljs.highlight(lang,code,true).value}
			catch(err){return hljs.highlightAuto(code).value}
		}
	})
	global.mdtab=function(width,height){
		width=Number(width)
		height=Number(height)
		if(isNaN(width)||isNaN(height))
			return null
		var nd=document.createElement("div")
		nd.style.width=width+"px"
		nd.style.height=height+"px"
		nd.className="mdtab"
		var btn_edit=document.createElement("button")
		var btn_prev=document.createElement("button")
		var btn_sour=document.createElement("button")
		btn_edit.type="button"
		btn_prev.type="button"
		btn_sour.type="button"
		btn_edit.className="mdtab-tabbtn mdtab-tabchecked"
		btn_prev.className="mdtab-tabbtn"
		btn_sour.className="mdtab-tabbtn"
		btn_edit.textContent="Edit"
		btn_prev.textContent="Preview"
		btn_sour.textContent="HTML"
		var tab=document.createElement("div")
		tab.className="mdtab-tab"
		tab.appendChild(btn_edit)
		tab.appendChild(btn_prev)
		tab.appendChild(btn_sour)
		nd.appendChild(tab)
		var edit=document.createElement("div")
		var prev=document.createElement("div")
		var sour=document.createElement("pre")
		var valc=document.createElement("div")
		edit.className="mdtab-val mdtab-active"
		prev.className="mdtab-val markdown-body"
		sour.className="mdtab-val"
		valc.className="mdtab-valueconter"
		prev.style.height=height-30+"px"
		sour.style.height=height-30+"px"
		nd.appendChild(valc)
		valc.appendChild(edit)
		valc.appendChild(prev)
		valc.appendChild(sour)
		var cm=CodeMirror(edit,{
			"mode":"gfm"
		})
		cm.setSize(width,height-30)
		function swch(){
			nd.querySelector(".mdtab-tabchecked").classList.remove("mdtab-tabchecked")
			nd.querySelector(".mdtab-active").classList.remove("mdtab-active")
			this.classList.add("mdtab-tabchecked")
		}
		btn_edit.addEventListener("click",swch)
		btn_prev.addEventListener("click",swch)
		btn_sour.addEventListener("click",swch)
		btn_edit.addEventListener("click",function(){
			edit.classList.add("mdtab-active")
		})
		btn_prev.addEventListener("click",function(){
			prev.classList.add("mdtab-active")
			prev.innerHTML=marked(cm.getValue())
		})
		btn_sour.addEventListener("click",function(){
			sour.classList.add("mdtab-active")
			sour.innerHTML=hljs.highlight("html",marked(cm.getValue()),true).value
		})
		return {
			"element":nd,
			"editor":cm
		}
	}
})(this);
