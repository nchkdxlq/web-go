
const EOF = Symbol['EOF']; // EOF: End Of File


let currentToken = null;
let currentAttribute = null;

/*

  关注点

  1. 开始标签
  2. 结束标签
  3. 自封闭标签

*/

function emit(token) {
  // console.log(token);
  if (token.type !== 'text') {
    console.log(token);
  }
}


function isAlphabet(c) {
  return c.match(/^[a-zA-z]$/);
}

function isWhiteSpace(c) {
  return c.match(/^[\t\n\f ]$/);
}


function data(c) {
  if (c === '<') {
    return tagOpen;
  } else if (c === EOF) {
    emit({
      type: 'EOF'
    });
    return ;
  } else {
    emit({
      type: 'text',
      content: c
    });
    return data;
  }
}

function tagOpen(c) {
  if (c === '/') { // <div></div>
    return endTagOpen;
  } else if (isAlphabet(c)) {
    currentToken = {
      type: 'startTag',
      tagName: ''
    };
    return tagName(c)
  } else {
    return ;
  }
}

function endTagOpen(c) {
  if (isAlphabet(c)) {
    currentToken = {
      type: 'endTag',
      tagName: ''
    };
    return tagName(c);
  } else if (c === '>') {
    
  } else if (c === EOF) {

  } else {

  }
}


function tagName(c) {
  if (isWhiteSpace(c)) {
    return beforeAttributeName;
  } else if (c === '/') {
    return selfCloseingStartTag;
  } else if (isAlphabet(c)) {
    currentToken.tagName += c.toLowerCase();
    return tagName;
  } else if (c === '>') {
    emit(currentToken);
    return data;
  } else {
    return tagName;
  }
}

function beforeAttributeName(c) {
  if (isWhiteSpace(c)) {
    return beforeAttributeName;
  } else if (c === '/' || c === '>' || c === EOF) {
    return afterAttributeName(c);
  } else if (c === '=') {

  } else {
    currentAttribute = {
      name: '',
      value: ''
    };
    return attributeName(c);
  }
}

function attributeName(c) {
  if (isWhiteSpace(c) || c === '/' || c === EOF) {
    return afterAttributeName(c);
  } else if (c === '=') {
    return beforeAttributeValue;
  } else if (c === '\u0000') {

  } else if (c === '\"' || c === '\'' || c === '<') {
    
  } else {
    currentAttribute.name += c;
    return attributeName;
  }
}

function afterAttributeName(c) {

}



function beforeAttributeValue(c) {
  if (isWhiteSpace(c) || c === '/' || c === '>' || c === EOF) {
    return beforeAttributeName;
  } else if (c === '\"') {
    return doubleQuotedAttributeValue;
  } else if (c === '\'') {
    return singleQuotedAttributeValue;
  } else if (c === '>') {

  } else {

  }
}


function doubleQuotedAttributeValue(c) {

}


function singleQuotedAttributeValue(c) {

}

function selfCloseingStartTag(c) {
  if (c === '>') {
    currentToken.isSelfClosing = true;
    return data;
  } else if (c == EOF) {

  } else {

  }
}

function parseHTML(html) {
  let state = data;
  for(let c of html) {
    // console.log(JSON.stringify(c));
    state = state(c);
  }
  state = state(EOF);
}

let html = 
`<html maaa=a >
<head>
  <style>

  </style>
</head>
<body>
  <div>
      <img id="myid"/>
      <img />
  </div>
</body>
</html>`

parseHTML(html);


module.exports.parseHTML = parseHTML;

