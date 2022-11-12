//Double bar chart: M10 position placement long s and round s (How many on each position)
$( document ).ready( function distribM10() {
  let slong = {
      x: ["initial", "medial", "final"],
      y: [345, 228, 0],
      name: 'long s',
      type: 'bar',
      marker: {
        color: ['#1ba3c4', '#1ba3c4', '#1ba3c4']
      },
      text: ['345 (60,21%)','228 (39,79%)','0 (0%)'],
      textposition: 'auto',
      // hoverinfo: 'text',
      // hovertext: ['345 (60,21%)','228 (39,79%)','0 (0%)']
  };
  
    let snorm = {
      x: ["initial", "medial", "final"],
      y: [8, 1, 128],
      name: 'round s',
      xaxis: 'x2',//eigene x Achse
      yaxis: 'y2',//eigene y Achse
      type: 'bar',
      marker: {
        color: ['#faca82', '#faca82', '#faca82']
        },
      text: ['8 (5,84%)','1 (0,73%)', '128 (93,43%)'],
      textposition: 'auto',
      // hoverinfo: 'text',
      // hovertext: ['8 (5,84%)','1 (0,73%)', '128 (93,43%)']
    };
  
  let data = [slong, snorm]

  let layout = {
    title:{
      text:'Position distribution of long s and round s in M10',
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

  Plotly.newPlot('distribM10', data, layout);
  })

///M10 distribution position placement long-s compared s-norm
$( document ).ready( function posM10() {
  let slong = {
    x: ['initial', 'medial', 'final'],
    y: [345, 228, 0],
    name: 'long s',
    type: 'bar',
    marker: {
      color: '#1ba3c4'
    },
    text: ['345 (97,73%)','228 (99,56%)','0 (0%)'],
    textposition: 'auto',
    // hoverinfo: 'name+text',
    // hovertext: [345 (97,73%)','228 (99,56%)','0 (0%)']
  };
  
  let snorm = {
    x: ['initial', 'medial', 'final'],
    y: [8, 1, 128],
    name: 'round s',
    type: 'bar',
    marker: {
      color: '#faca82'
    },
    text: ['8 (2,27%)','1 (0,44%)','128 (100%)'],
    textposition: 'auto',
    // hoverinfo: 'name+text',
    // hovertext: ['8 (2,27%)','1 (0,44%)','128 (100%)']
  };
  
  let data = [slong, snorm];
  
  let layout = {
    title:{
      text:'Comparison of each word position in M10',
      font: {
        family: 'Georgia, Times New Roman, Times, serif',
        size: 24
      },
    },
    barmode: 'group',
    font: {family: "Georgia, Times, serif"}
  };
  
  Plotly.newPlot('posM10', data, layout);
  })


///M10 double s ratio - double shaft, double round, ratio of combo shaft/round, word positions
  $( document ).ready( function doublesM10() {
  let double = {
      x: ['double long-s', 'double round-s', 'combo'],
      y: [54, 0, 2],
      type: 'bar',
      marker: {
        color: ['#1ba3c4', '#faca82', '#78202f']
      },
      text: ['54 (96,43%)','0 (0%)','2 (3,57%)'],
      textposition: 'auto',
      // hoverinfo: 'text',
      // hovertext: ['54 (96,43%)','0 (0%)','2 (3,57%)']
  };
  
    let leader = {
      x: ['leading long-s', 'leading round-s'],
      y: [2, 0],
      xaxis: 'x2',//eigene x Achse
      yaxis: 'y2',//eigene y Achse
      type: 'bar',
      marker: {
        color: ['#1ba3c4', '#faca82']
        },
      text: ['2 (100%)','0 (0%)'],
      textposition: 'auto', 
      // hoverinfo: 'text',
      // hovertext: ['2 (100%)','0 (0%)']
    };
  
  let data = [double, leader]

  let layout = {
    title:{
      text:'Double s constellations in M10',
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

  Plotly.newPlot('doublesM10', data, layout);
  })

  
  ///M10 graphems in combination with both s types
  $( document ).ready( function charswithsM10() {
    let slong = {
      x: ['s & t', 's & ch'],
      y: [72, 114],
      name: 'long s',
      type: 'bar',
      marker: {
        color: '#1ba3c4'
      },
      text: ['72 (100%)','114 (100%)'],
      textposition: 'auto',
      // hoverinfo: 'name+text',
      // hovertext: ['72 (100%)','114 (100%)']
    };
    
    let snorm = {
      x: ['s & t', 's & ch'],
      y: [0, 0],
      name: 'round s',
      type: 'bar',
      marker: {
        color: '#faca82'
      },
      text: ['0 (0%)','0 (0%)'],
      textposition: 'auto',
      // hoverinfo: 'name+text',
      // hovertext: ['0 (0%)','0 (0%)']
    };
    
    let data = [slong, snorm];
    
    let layout = {
      title:{
        text:'Comparison of typical s allograph combinations in M10',
        font: {
          family: 'Georgia, Times New Roman, Times, serif',
          size: 24
        },
      },
      barmode: 'group',
      font: {family: "Georgia, Times, serif"}
    };
    
    Plotly.newPlot('charswithsM10', data, layout);
  })

  //M10 slong course across manuscript
  $( document ).ready( function slongAcrossM10() {
    let initial = {
      x:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
      y:[17,13,23,17,17,22,24,25,16,16,15,19,21,22,25,13,12,15,5,8], 
      mode: 'lines',
      name: 'initial',
      marker: {
        color: '#3fcca9',
        size: 5
      }
    };
    
    let medial = {
      x:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
      y:[11,12,18,18,11,17,16,14,8,3,14,6,14,11,17,12,8,11,5,2],
      mode: 'lines',
      name: 'medial',
      marker: {
        color: '#e32d46',
        size: 5
      }
    };
    
    let final = {
      x: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
      y: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      mode: 'lines',
      name: 'final',
      marker: {
        color: '#207858',
        size: 5
      }
    };
    
    let data = [ initial, medial, final ];
    
    let layout = {
      title: "Positioning of long-s throughout M10",
      font: {family: "Georgia, Times, serif"}
    };
    
    let config = {responsive: true}

    Plotly.newPlot('slongAcrossM10', data, layout, config);
  })

  //M10 snorm course across manuscript
  $( document ).ready( function snormAcrossM10() {
    let initial = {
      x:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
      y:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,1,1], 
      mode: 'lines',
      name: 'initial',
      marker: {
        color: '#3fcca9',
        size: 5
      }
    };
    
    let medial = {
      x:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
      y:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
      mode: 'lines',
      name: 'medial',
      marker: {color: '#e32d46',
        size: 5
      }
    };
    
    let final = {
      x: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
      y: [6,4,6,4,5,4,5,3,8,4,2,3,1,2,9,13,21,21,7],
      mode: 'lines',
      name: 'final',
      marker: {
        color: '#207858',
        size: 5
      }
    };
    
    let data = [ initial, medial, final ];
    
    let layout = {
      title: "Positioning of round-s throughout M10",
      font: {family: "Georgia, Times, serif"}
    };
    
    let config = {responsive: true}
    
    Plotly.newPlot('snormAcrossM10', data, layout, config);
  })

  //M10 both s types' initial and medial course across manuscript
  $( document ).ready( function bothsAcrossM10() {
    let initial_slong = {
      x:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
      y:[17,13,23,17,17,22,24,25,16,16,15,19,21,22,25,13,12,15,5,8], 
      mode: 'lines',
      name: 'initial long-s',
      marker: {
        color: '#5ed6c2',
        size: 5
      }
    };
    
    let medial_slong = {
      x:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
      y:[11,12,18,18,11,17,16,14,8,3,14,6,14,11,17,12,8,11,5,2],
      mode: 'lines',
      name: 'medial long-s',
      marker: {
        color: '#4cadad',
        size: 5
      }
    };

    let initial_snorm = {
      x:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
      y:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
      mode: 'lines',
      name: 'initial round-s',
      marker: {
        color: '#ffc782',
        size: 5
      }
    };
    
    let medial_snorm = {
      x:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
      y:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
      mode: 'lines',
      name: 'medial round-s',
      marker: {color: '#d1633f',
        size: 5
      }
    };

    let data = [ initial_slong, medial_slong, initial_snorm, medial_snorm ];
    
    let layout = {
      title: "Initial and medial positions of both s throughout M10",
      font: {family: "Georgia, Times, serif"}
    };
    
    let config = {responsive: true}

    Plotly.newPlot('bothsAcrossM10', data, layout, config);
  })