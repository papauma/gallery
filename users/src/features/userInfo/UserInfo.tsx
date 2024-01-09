import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PageTitle from 'main/PageTitle'
import LabelValue from '../../components/labelValue/LabelValue'

export default function UserInfo (): JSX.Element {
  const [userData, setUserData] = useState() as any
  const userId = useParams().userId

  useEffect(() => {
    const fetchUser = async (): Promise<void> => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
      const data = await response.json()
      setUserData(data)
    }
    fetchUser()
  }, [userId])

  return (
    <div className="users">
      <PageTitle text={`User information (${userData?.[0]?.name})`} />
      <LabelValue label='Name' value={userData?.[0]?.name}/>
      <LabelValue label='User name' value={userData?.[0]?.username} />
      <LabelValue label='Mail' value={userData?.[0]?.email} />
      <LabelValue label='Adress' value={userData?.[0]?.address?.street} />
      <div>{userData?.[0]?.address?.suite}</div>
      <div>{userData?.[0]?.address?.city}</div>
      <div>{userData?.[0]?.address?.zipcode}</div>
      <div className="userInfo_label">Geo:</div>
      <div>{userData?.[0]?.address?.geo?.lat}</div>
      <div>{userData?.[0]?.address?.geo?.lng}</div>
      <LabelValue label='Phone' value={userData?.[0]?.phone} />
      <LabelValue label='Website' value={userData?.[0]?.website} />
      <div className="userInfo_label">Company:</div>
      <div>{userData?.[0]?.company?.name}</div>
      <div>{userData?.[0]?.company?.catchPhrase}</div>
      <div>{userData?.[0]?.company?.bs}</div>
    </div>
  )
}
