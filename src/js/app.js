
gsap.to('#num', { innerText: 40, duration: 3, snap: 'innerText' })

gsap.to('#num_2', { innerText: 74, duration: 3, snap: 'innerText' })

gsap.to('.occupied', { width: "60%", duration: 3, snap: 'width' })


function createCircleChart(percent, color, size, stroke, text) {
    let svg = `<svg class="mkc_circle-chart" viewbox="0 0 36 36" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
        <path class="mkc_circle-bg" stroke="#eeeeee" stroke-width="${stroke * 0.5}" fill="none" d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"/>
        <path class="mkc_circle" stroke="${color}" stroke-width="${stroke}" stroke-dasharray="${percent},100" stroke-linecap="round" fill="none"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831" />
       
        
    </svg>
    
    <svg class="mkc_circle-popup" style="transform: translate(${size/2-175}px, ${size/2-45}px);" width="90" height="32" viewBox="0 0 90 32" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path id="MyPath"
                d="M90 24.7736C90 26.4304 88.6569 27.7736 87 27.7736L48.8571 27.7736L45.7386 31.1906C45.3421 31.6252 44.6579 31.6252 44.2614 31.1906L41.1429 27.7736L2.99999 27.7736C1.34314 27.7736 -7.14249e-06 26.4304 -6.99764e-06 24.7736L-5.09413e-06 3C-4.94929e-06 1.34315 1.34313 -2.02858e-06 3 -1.88374e-06L87 5.45978e-06C88.6569 5.60462e-06 90 1.34315 90 3.00001L90 24.7736Z"
                fill="#383838" />
            <text x="30" y="17" font-size="8" font-family="Gilroy" fill="#ffffff">
            ${text}
            </text>
        </svg>`;
    return svg;
}

let charts = document.getElementsByClassName('circle_chart');

for (let i = 0; i < charts.length; i++) {
    let chart = charts[i];
    let percent = chart.dataset.percent;
    let color = ('color' in chart.dataset) ? chart.dataset.color : "#A5A6F6";
    let size = ('size' in chart.dataset) ? chart.dataset.size : "100";
    let stroke = ('stroke' in chart.dataset) ? chart.dataset.stroke : "1";
    let text = ('text' in chart.dataset) ? chart.dataset.text : "1";
    charts[i].innerHTML = createCircleChart(percent, color, size, stroke, text);
}


// $('.circle_chart .mkc_circle-chart').on('click', function() {
//     $(this).addClass('popup_active')
// })

$('#arrow_down').on('click', function() {
    $('.aside').toggleClass('aside_active')
    $(this).toggleClass('active_arrow')
})