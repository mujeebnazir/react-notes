function createReact(elem, continer) {
  //   const newEle = document.createElement(elem.type);
  //   newEle;
  //   newEle.innerHTML = elem.children;
  //   newEle.setAttribute("href", elem.props.href);

  //   newEle.setAttribute("target", elem.props.target);

  //   continer.appendChild(newEle);

  const domEle = document.createElement(elem.type);
  domEle.innerHTML = elem.children;
  for (const key in elem.props) {
    if (key === "children") continue;
    domEle.setAttribute(key, elem.props[key]);
  }
  continer.appendChild(domEle);
}

const reactEle = {
  type: "a",
  props: {
    href: "http://google.com",
    target: "_blank",
  },
  children: "Click here",
};

const mainContainer = document.getElementById("root");
