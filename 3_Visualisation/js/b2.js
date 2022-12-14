//B2 position placement long s
$( document ).ready( function slongB2() {
  
  let labels = ["initial", "medial", "final"];
  let values = [63, 51, 5];
  
  let slongB2Data = {
    x: labels,
    y: values,
    type: "bar",
    hoverinfo: 'text',
    hovertext: ['63 (52,94%)','51 (42,86%)','5 (4,20%)'] ,
    marker: {
        color: "#1ba3c4"
    }
  };
  
  let data = [ slongB2Data ];
  
  let layout = { 
    title: "Position distribution of long s in B2",
    font: {family: "Georgia, Times, serif"}
  };
  
  let config = {responsive: true}
  
  Plotly.newPlot("slongB2", data, layout, config );
})

//B2 position placement long s and round s (How many on each position)
$( document ).ready( function distribB2() {
  let slong = {
      x: ["initial", "medial", "final"],
      y: [63, 51, 5],
      name: 'long s',
      type: 'bar',
      marker: {
        color: ['#1ba3c4', '#1ba3c4', '#1ba3c4']
      },
      hoverinfo: 'text',
      hovertext: ['63 (52,94%)','51 (42,86%)','5 (4,20%)']
  };
  
    let snorm = {
      x: ["initial", "medial", "final"],
      y: [15, 2, 37],
      name: 'round s',
      xaxis: 'x2',//eigene x Achse
      yaxis: 'y2',//eigene y Achse
      type: 'bar',
      marker: {
        color: ['#faca82', '#faca82', '#faca82']
        },
      hoverinfo: 'text',
      hovertext: ['15 (27,78%)','2 (3,70%)', '37 (68,52%)']
    };
  
  let data = [slong, snorm]

  let layout = {
    title:{
      text:'Position distribution of long s and round s in B2',
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

  Plotly.newPlot('distribB2', data, layout);
  })

//B2 comparison of each word position
$( document ).ready( function posB2() {
  let slong = {
    x: ['initial', 'medial', 'final'],
    y: [63, 51, 5],
    name: 'long s',
    type: 'bar',
    marker: {
      color: '#1ba3c4'
    },
    hoverinfo: 'name+text',
    hovertext: ['63 (80,77%)', '51 (96,23%)', '5 (11,90%)'] ,
  };
  
  let snorm = {
    x: ['initial', 'medial', 'final'],
    y: [15, 2, 37],
    name: 'round s',
    type: 'bar',
    marker: {
      color: '#faca82'
    },
    hoverinfo: 'name+text',
    hovertext: ['15 (19,23%)','2 (3,77%)','37 (88,10%)'] ,
  };
  
  let data = [slong, snorm];
  
  let layout = {
    barmode: 'group',
    title: "Comparison of each word position in B2",
    font: {family: "Georgia, Times, serif"}
  };
  
  Plotly.newPlot('posB2', data, layout);
})