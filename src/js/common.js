import _ from 'lodash';

function component() {
    var element = document.createElement('div');
  
    // -- Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    //lodash , now imported by this scripts
    element.innerHTML = _.join(['Hello', 'common'], ' ');
  
    return element;
}
  
document.body.appendChild(component());