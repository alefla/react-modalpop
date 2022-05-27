#### React modal Basic

This project is good for understanding how modal works in react.
To Overlay the element after the Modal, we need to use ReactDOM.createPortal() instead of .render() and add the new div in index.html with the # for the portal. 
createPortal() is better than render() because it keep the same relation parent/child element in jsx, while render will be separate like in index.html
