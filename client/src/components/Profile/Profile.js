//IMPORT PACKAGES
import { React, useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//IMPORT IMAGES
import logo from '../../images/logo.svg';

//IMPORT CONTEXTS
import { AuthContext } from '../../contexts/AuthContext.js';

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [profileData, setProfileData] = useState({
    name: user.name,
    email: user.email,
    password: user.password
  });

  const profile = profileData;

  useEffect(() => {
    if(profile) setProfileData(profile);
  }, [profile])

  const handleSubmit = (e) => {
    e.preventDefault();


  }

  return (
    <div class="body-wrap">
      <header class="site-header">
        <div class="container">
          <div class="site-header-inner">
            <div class="brand">
              <h1 class="m-0"><Link to="/"><img src={ logo } alt="Sketch" width="32"
                    height="32"/></Link></h1>
            </div>
          </div>
        </div>
      </header>
      <main class="site-content">
        <div class="container-sm">
          <div class="hero-inner section-inner">
              <h1 class="mt-0 mb-12 reveal-scale-down" data-reveal-delay="300">Profile</h1>
          </div>
        </div>
        <section class="section illustration-section-03">
          <form style={{ maxWidth:"420px", margin:"0 auto" }}>
            <div class="mb-24"><label class="form-label" for="input-01">Update Name</label>
              <div class="form-group-desktop"><input class="form-input" type="name" id="input-01"
                  placeholder="Full Name" value={user.name} onChange={ (e) => setProfileData({ ...profileData, name: e.target.value }) }/> <button class="button button-primary">Update</button></div>
            </div>
            <div class="mb-24"><label class="form-label" for="input-02">Update Email</label>
              <div class="form-group-desktop"><input class="form-input" type="email" id="input-02"
                  placeholder="Email" value={user.email} onChange={ (e) => setProfileData({ ...profileData, email: e.target.value }) }/> <button class="button button-primary">Update</button></div>
            </div>
            <div class="mb-24"><label class="form-label" for="input-03">Update Password</label>
              <div class="form-group-desktop"><input class="form-input" type="password" id="input-03"
                  placeholder="Password" onChange={ (e) => setProfileData({ ...profileData, password: e.target.value }) }/> <button class="button button-primary">Update</button></div>
            </div>
          </form>
        </section>
      </main>
    </div>
  )
}

export default Profile
