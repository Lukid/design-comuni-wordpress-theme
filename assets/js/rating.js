const eventName="feedback-submit",submitRating=()=>{const t=document.querySelector("#rating-feedback");t.innerHTML="";var e=[location.protocol,"//",location.host,location.pathname].join("");let a=document.querySelector("title").innerText;a?.includes("Risultati della ricerca per")&&(a="Risultati di ricerca");var n=document.querySelector('input[name="ratingA"]:checked')?.value||null,r=3<n?document.querySelector('input[name="rating1"]:checked'):document.querySelector('input[name="rating2"]:checked'),r=(r?r.parentElement:null)?.querySelector("label")?.innerHTML||null,o=document.querySelector("#formGroupExampleInputWithHelp")?.value||null,n={title:escapeHTML(a),star:escapeHTML(n),radioResponse:escapeHTML(r),freeText:escapeHTML(o),page:escapeHTML(e)};fetch(data.ajaxurl,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded","Cache-Control":"no-cache"},body:new URLSearchParams({action:"save_rating",...n})}).then(e=>{if(!e.ok)throw new Error("");t.innerHTML="Grazie, il tuo parere ci aiuterà a migliorare il servizio!"}).catch(e=>{t.innerHTML="Ops, qualcosa è andato storto."})};document.addEventListener(eventName,()=>submitRating());