import React, { PureComponent } from 'react'
import ProfileHeader from './ProfileHeader'
import UserModify from './UserModify'
import ColorProfileHeader from './ColorProfileHeader'

export default class Profile extends PureComponent {
  render() {
    const { name, level } = this.props;
    return (
      <div>
        <ProfileHeader name={name} level={level} />
        <hr/>
        <ColorProfileHeader />
        <hr/>
        <UserModify />
      </div>
    )
  }
}
