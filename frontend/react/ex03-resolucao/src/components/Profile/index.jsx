import LinkButtom from "../LinkButtom"
import Title from "../Title"
import ProfileSection from "./ProfileSection"
import styles from "./styles.module.css"

export default function Profile(props) {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <Title>
        <span>{props.name}</span>
        <button>Olá mundo</button>
      </Title>
      <ProfileSection>{props.bio}</ProfileSection>
      <ProfileSection>{props.phone}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>
      <ProfileSection>
        <div className={styles.links}>
          <LinkButtom href={props.githubUrl}>GitHub</LinkButtom>
          <LinkButtom href={props.linkedinUrl}>LinkedIn</LinkButtom>
          <LinkButtom href={props.twitterUrl}>Twitter</LinkButtom>
        </div>
      </ProfileSection>
    </div>
  )
}