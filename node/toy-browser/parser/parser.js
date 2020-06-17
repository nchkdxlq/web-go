const EOF = Symbol['EOF']; // EOF: End Of File

function data(c) {
  if (c === '<') {
    return tagOpen;
  } else if (c === EOF) {
    return ;
  } else {
    return data;
  }
}

function tagOpen(c) {
  if (c === '/') { // <div></div>
    return endTagOpen;
  } else if (c.match(/^[a-zA-Z]&/)) {
    return tagName(c)
  } else {
    return ;
  }
}

function endTagOpen(c) {

}


function tagName(c) {
  if (c.match(/^[\t\n\f ]$/)) {
    return beforeAttributeName;
  } else if (c === '/') {
    return selfCloseingStartTag;
  } else if (c.match(/^[a-zA-Z]&/)) {
    return tagName;
  } else if (c === '>') {
    return data;
  } else {
    return tagName;
  }
}

function beforeAttributeName(c) {
  if (c.match(/^[\t\n\f ]$/)) {

  } else if (c === '>') {
    return data;
  } else if (c === '=') {
    return beforeAttributeName;
  } else {
    return beforeAttributeName;
  }
}


function selfCloseingStartTag(c) {

}

module.exports.parseHTML = function parseHTML(html) {
  let state = data;
  for(let c of html) {
    state = state(c);
  }
  state = state(EOF);
}


