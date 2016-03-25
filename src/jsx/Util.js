//display属性的改变
function css_display(value) {
    if (value) {
        return {display: 'flex'};
    } else {
        return {display: 'none'};
    }
}

function change_height(value) {
    if (value) {
        return {height: "50px",boxShadow: "0 2px 5px rgba(0,0,0,0.26)"};
    } else {
        return { height: "200px",boxShadow:"none"};
    }
}
function position_top(value){
    if (value) {
        return {top: '100px'};
    } else {
        return {top: '250px'};
    }
}