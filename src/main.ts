figma.showUI(__html__);

figma.ui.onmessage = (msg) => {
  if (msg.type === "export") {
    console.log(msg);
    const paints = figma.getLocalPaintStyles();
    console.log(paints[0]);

    figma.ui.postMessage({ value: { palette: { name: paints[0].name } } });
  }
};
