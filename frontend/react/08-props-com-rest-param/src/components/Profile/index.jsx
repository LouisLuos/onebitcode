import LinkButtom from "../LinkButtom"
import Title from "../Title"
import ProfileSection from "./ProfileSection"
import styles from "./styles.module.css"

export default function Profile(props) {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <Title>{props.name}</Title>
      <ProfileSection>{props.bio}</ProfileSection>
      <ProfileSection>{props.phone}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>
      <ProfileSection
        className={styles.links}
      >
          <LinkButtom linkDoBotao={props.githubUrl}>GitHub</LinkButtom>
          <LinkButtom linkDoBotao={props.linkedinUrl}>LinkedIn</LinkButtom>
          <LinkButtom linkDoBotao={props.twitterUrl}>Twitter</LinkButtom>
      </ProfileSection>
    </div>
  )
}