//Double bar chart: M10 position placement long s and round s (How many on each position)
$( document ).ready( function distribW3() {
  let slong = {
      x: ["initial", "medial", "final"],
      y: [1567, 1120, 6],
      name: 'long s',
      type: 'bar',
      marker: {
        color: ['#1ba3c4', '#1ba3c4', '#1ba3c4']
      },
      hoverinfo: 'text',
      hovertext: ['1567 (58,19%)','1120 (41,59%)','6 (0,22%)']
  };
  
    let snorm = {
      x: ["initial", "medial", "final"],
      y: [52, 6, 1250],
      name: 'round s',
      xaxis: 'x2',//eigene x Achse
      yaxis: 'y2',//eigene y Achse
      type: 'bar',
      marker: {
        color: ['#faca82', '#faca82', '#faca82']
        },
      hoverinfo: 'text',
      hovertext: ['52 (3,98%)','6 (0,46%)','1250 (95,57%)']
    };
  
  let data = [slong, snorm]

  let layout = {
    title:{
      text:'Position distribution of long s and round s in W3',
      font: {
        family: 'Georgia, Times New Roman, Times, serif',
        size: 24
      },
    },
    grid: {rows: 2,
    columns: 1,
    pattern: 'independent',
    roworder: 'top to bottom'},
    font: {family: "Georgia, Times, serif"},
  };

  Plotly.newPlot('distribW3', data, layout);
  })

///W3 distribution position placement long s compared s-norm
$( document ).ready( function posW3() {
  let slong = {
    x: ['initial', 'medial', 'final'],
    y: [1567, 1120, 6],
    name: 'long s',
    type: 'bar',
    marker: {
      color: '#1ba3c4'
    },
    hoverinfo: 'name+text',
    hovertext: ['1567 (96,79%)','1120 (99,47%)','6 (0,48%)']
  };
  
  let snorm = {
    x: ['initial', 'medial', 'final'],
    y: [52, 6, 1250],
    name: 'round s',
    type: 'bar',
    marker: {
      color: '#faca82'
    },
    hoverinfo: 'name+text',
    hovertext: ['52 (3,21%)','6 (0,53%)','1250 (99,52%)']
  };
  
  let data = [slong, snorm];
  
  let layout = {
    title:{
      text:'Comparison of each word position in W3',
      font: {
        family: 'Georgia, Times New Roman, Times, serif',
        size: 24
      },
    },
    barmode: 'group',
    font: {family: "Georgia, Times, serif"}
  };
  
  Plotly.newPlot('posW3', data, layout);
  })


///W3 double s ratio - double shaft, double round, ratio of combo shaft/round, word positions
  $( document ).ready( function doublesW3() {
  let double = {
      x: ['double long s', 'double round s', 'combo'],
      y: [215, 3, 3],
      type: 'bar',
      marker: {
        color: ['#1ba3c4', '#faca82', '#78202f']
      },
      hoverinfo: 'text',
      hovertext: ['215 (98,62%)','0 (0%)','3 (1,38%)']
  };
  
    let leader = {
      x: ['leading long s', 'leading round s'],
      y: [3, 0],
      xaxis: 'x2',//eigene x Achse
      yaxis: 'y2',//eigene y Achse
      type: 'bar',
      marker: {
        color: ['#1ba3c4', '#faca82']
        },
      hoverinfo: 'text',
      hovertext: ['3 (100%)','0 (0%)']
    };
  
  let data = [double, leader]

  let layout = {
    title:{
      text:'Double s constellations in W3',
      font: {
        family: 'Georgia, Times New Roman, Times, serif',
        size: 24
      },
    },
    grid: {rows: 2,
    columns: 1,
    pattern: 'independent',
    roworder: 'top to bottom'},
    font: {family: "Georgia, Times, serif"},
    showlegend: false
  };

  Plotly.newPlot('doublesW3', data, layout);
  })

  
  ///W3 graphems in combination with both s types
  $( document ).ready( function charswithsW3() {
    let slong = {
      x: ['s & t', 's & ch'],
      y: [403, 308],
      name: 'long s',
      type: 'bar',
      marker: {
        color: '#1ba3c4'
      },
      hoverinfo: 'name+text',
      hovertext: ['403 (99,02%)','308 (99,04%)']
    };
    
    let snorm = {
      x: ['s & t', 's & ch'],
      y: [4, 3],
      name: 'round s',
      type: 'bar',
      marker: {
        color: '#faca82'
      },
      hoverinfo: 'name+text',
      hovertext: ['4 (0,98%)','3 (0,96%)']
    };
    
    let data = [slong, snorm];
    
    let layout = {
      title:{
        text:'Comparison of typical s allograph combinations in W3',
        font: {
          family: 'Georgia, Times New Roman, Times, serif',
          size: 24
        },
      },
      barmode: 'group',
      font: {family: "Georgia, Times, serif"}
    };
    
    Plotly.newPlot('charswithsW3', data, layout);
  })

  //W3 slong course across manuscript
  $( document ).ready( function slongAcrossW3() {
    let initial = {
      x:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67],
      y:[7,15,0,13,26,26,19,22,17,31,20,29,35,35,25,32,19,23,26,36,29,27,12,21,14,24,17,16,15,33,10,12,34,26,26,32,33,37,15,40,20,24,15,35,21,24,28,21,17,22,20,25,25,31,24,23,18,22,21,24,24,24,16,39,24,34,17], 
      mode: 'lines',
      name: 'initial',
      marker: {
        color: '#3fcca9',
        size: 5
      }
    };
    
    let medial = {
      x:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67],
      y:[16,8,15,12,20,18,23,21,26,35,38,17,22,14,23,21,13,27,23,9,22,13,20,16,19,6,11,13,12,18,11,17,39,12,11,11,17,9,15,14,13,14,12,30,20,9,12,14,10,17,16,30,26,19,10,10,15,11,14,12,8,6,15,18,17,20,15],
      mode: 'lines',
      name: 'medial',
      marker: {
        color: '#e32d46',
        size: 5
      }
    };
    
    let final = {
      x: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67],
      y: [0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      mode: 'lines',
      name: 'final',
      marker: {
        color: '#207858',
        size: 5
      }
    };
    
    let data = [ initial, medial, final ];
    
    let layout = {
      title: "Positioning of long s throughout W3",
      font: {family: "Georgia, Times, serif"}
    };
    
    let config = {responsive: true}

    Plotly.newPlot('slongAcrossW3', data, layout, config);
  })

  //W3 snorm course across manuscript
  $( document ).ready( function snormAcrossW3() {
    let initial = {
      x:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67],
      y:[0,0,0,0,0,0,4,2,2,2,4,2,1,2,1,1,3,0,1,0,2,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,2,1,2,1,1,1,0,1,2,4,0,0,0,3,0,0,0,0,1,0,0,1,1], 
      mode: 'lines',
      name: 'initial',
      marker: {
        color: '#3fcca9',
        size: 5
      }
    };
    
    let medial = {
      x:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67],
      y:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,1,1,0,0,0,0,1,1,0,0],
      mode: 'lines',
      name: 'medial',
      marker: {color: '#e32d46',
        size: 5
      }
    };
    
    let final = {
      x: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67],
      y: [6,7,11,5,18,24,35,31,19,9,16,40,14,31,23,19,32,16,30,28,33,23,18,15,13,12,12,19,13,12,22,16,23,17,16,15,20,18,22,12,26,18,6,5,8,24,5,20,25,22,20,19,12,13,26,28,20,21,24,14,16,20,24,14,16,27,12],
      mode: 'lines',
      name: 'final',
      marker: {
        color: '#207858',
        size: 5
      }
    };
    
    let data = [ initial, medial, final ];
    
    let layout = {
      title: "Positioning of round s throughout W3",
      font: {family: "Georgia, Times, serif"}
    };
    
    let config = {responsive: true}
    
    Plotly.newPlot('snormAcrossW3', data, layout, config);
  })

  //W3 both s types' initial and medial course across manuscript
  $( document ).ready( function bothsAcrossW3() {
    let initial_slong = {
      x:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67],
      y:[7,15,0,13,26,26,19,22,17,31,20,29,35,35,25,32,19,23,26,36,29,27,12,21,14,24,17,16,15,33,10,12,34,26,26,32,33,37,15,40,20,24,15,35,21,24,28,21,17,22,20,25,25,31,24,23,18,22,21,24,24,24,16,39,24,34,17], 
      mode: 'lines',
      name: 'initial long s',
      marker: {
        color: '#5ed6c2',
        size: 5
      }
    };
    
    let medial_slong = {
      x:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67],
      y:[16,8,15,12,20,18,23,21,26,35,38,17,22,14,23,21,13,27,23,9,22,13,20,16,19,6,11,13,12,18,11,17,39,12,11,11,17,9,15,14,13,14,12,30,20,9,12,14,10,17,16,30,26,19,10,10,15,11,14,12,8,6,15,18,17,20,15],
      mode: 'lines',
      name: 'medial long s',
      marker: {
        color: '#4cadad',
        size: 5
      }
    };

    let initial_snorm = {
      x:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67],
      y:[0,0,0,0,0,0,4,2,2,2,4,2,1,2,1,1,3,0,1,0,2,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,2,1,2,1,1,1,0,1,2,4,0,0,0,3,0,0,0,0,1,0,0,1,1], 
      mode: 'lines',
      name: 'initial round s',
      marker: {
        color: '#ffc782',
        size: 5
      }
    };
    
    let medial_snorm = {
      x:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67],
      y:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,1,1,0,0,0,0,1,1,0,0],
      mode: 'lines',
      name: 'medial round s',
      marker: {color: '#d1633f',
        size: 5
      }
    };

    let data = [ initial_slong, medial_slong, initial_snorm, medial_snorm ];
    
    let layout = {
      title: "Initial and medial positions of both s throughout W3",
      font: {family: "Georgia, Times, serif"}
    };
    
    let config = {responsive: true}

    Plotly.newPlot('bothsAcrossW3', data, layout, config);
  })