import React from 'react';

const UserContext = React.createContext({
  name: '默认',
  level: -1
});

export default UserContext;