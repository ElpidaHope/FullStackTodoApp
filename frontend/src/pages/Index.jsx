import ParticleLoader from "../components/ParticleLoader";
import SignInForm from "../components/SignInForm";
import style from '../styles/pages/index.module.scss';

function Index() {
  return (
    <>
      <div className={style.main}>
        <ParticleLoader />
        <div>
          <h1>Welcome to Todo</h1>
          <SignInForm />
        </div>
      </div>
    </>
  )
}
export default Index