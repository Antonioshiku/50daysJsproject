const lable=document.querySelectorAll('.label');


lable.forEach( (label) => {
        let aa= label.innerHTML; 
        let bb=label.innerText.split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('');
        aa.replace(bb);
})