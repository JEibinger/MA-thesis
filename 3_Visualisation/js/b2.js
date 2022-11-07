//B2 position placement long-s
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
    title: "Position distribution of long-s in the <a href='http://gams.uni-graz.at/o:corema.b2'>manuscript B2</a>",
    font: {family: "Georgia, Times, serif"}
  };
  
  let config = {responsive: true}
  
  Plotly.newPlot("slongB2", data, layout, config );
})

//B2 distribution position placement long-s compared s-norm
$( document ).ready( function distribB2() {
  let slong = {
    x: ['initial', 'medial', 'final'],
    y: [15, 2, 37],
    name: 'long s',
    type: 'bar',
    marker: {
      color: '#1ba3c4'
    },
    hoverinfo: 'name+text',
    hovertext: ['15 (27,78%)', '2 (3,70%)', '37 (68,52%)'] ,
  };
  
  let snorm = {
    x: ['initial', 'medial', 'final'],
    y: [11, 1, 17],
    name: 'round s',
    type: 'bar',
    marker: {
      color: '#faca82'
    },
    hoverinfo: 'name+text',
    hovertext: ['11 (19,64%)','1 (2,78%)','17 (100%)'] ,
  };
  
  let data = [slong, snorm];
  
  let layout = {
    barmode: 'group',
    title: "Position distribution of long-s in the <a href='http://gams.uni-graz.at/o:corema.b2'>manuscript B2</a>",
    font: {family: "Georgia, Times, serif"}
  };
  
  Plotly.newPlot('distribB2', data, layout);
})