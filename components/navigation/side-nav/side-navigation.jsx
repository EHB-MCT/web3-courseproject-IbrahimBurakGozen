import styles from './side-navigation.module.scss';
import {iconAdd, iconHome, iconList, iconVoorlopig} from '../../../images/icons/icons-list';

const SideNavigation = () => {

  return (
    <nav className={styles.mobileContainer}>
        <div className={styles.linksContainer}>

        <a href="" className={styles.link, styles.currentPage}>{iconHome}</a>
           
        <a href="" className={styles.link}>{iconList}</a>

        <a href="" className={styles.link, styles.addButton}>{iconAdd}</a>

        <a href="" className={styles.link}>{iconVoorlopig}</a>
           
        <a href="" className={styles.link} ><span ><img src="https://picsum.photos/30/30" alt="" /></span></a>
         
        </div>
    </nav>
  );
}

export default SideNavigation;

{/* <div className={styles.navigationContainer}>
  <div className={styles.navigationInnerLinks}>
    <a href="" className={styles.navigationLink, styles.desktop}><span className={styles.accountLink}><img
        className={styles.profileImg}   src="https://picsum.photos/30/30" alt="" /></span></a>

    <a href="" className={styles.navigationLink, styles.currentPage}><span
        className={styles.navgiationLinkInnerContent}><svg xmlns="http://www.w3.org/2000/svg" width="38.579" height="30"
          viewBox="0 0 38.579 30">
          <path id="Icon_awesome-home" data-name="Icon awesome-home"
            d="M18.777,10.036,6.429,20.206V31.182A1.072,1.072,0,0,0,7.5,32.254l7.5-.019a1.072,1.072,0,0,0,1.066-1.072v-6.41a1.072,1.072,0,0,1,1.072-1.072H21.43A1.072,1.072,0,0,1,22.5,24.753v6.405a1.072,1.072,0,0,0,1.072,1.075l7.5.021a1.072,1.072,0,0,0,1.072-1.072V20.2L19.8,10.036A.816.816,0,0,0,18.777,10.036Zm19.5,6.912-5.6-4.615V3.057a.8.8,0,0,0-.8-.8h-3.75a.8.8,0,0,0-.8.8V7.92l-6-4.933a3.215,3.215,0,0,0-4.085,0L.291,16.948A.8.8,0,0,0,.183,18.08l1.708,2.076a.8.8,0,0,0,1.132.109L18.777,7.29a.816.816,0,0,1,1.025,0L35.555,20.266a.8.8,0,0,0,1.132-.107l1.708-2.076a.8.8,0,0,0-.114-1.134Z"
            transform="translate(0.001 -2.254)" />
        </svg>
        <span>Home</span></span></a>

    <a href="" className={styles.navigationLink, styles.mobile }><span className={styles.navgiationLinkInnerContent}><svg
          xmlns="http://www.w3.org/2000/svg" width="15.365" height="15.368" viewBox="0 0 15.365 15.368">
          <path id="Icon_awesome-search" data-name="Icon awesome-search"
            d="M15.156,13.286l-2.992-2.992a.72.72,0,0,0-.51-.21h-.489a6.24,6.24,0,1,0-1.08,1.08v.489a.72.72,0,0,0,.21.51l2.992,2.992a.717.717,0,0,0,1.017,0l.849-.849a.724.724,0,0,0,0-1.02Zm-8.914-3.2a3.842,3.842,0,1,1,3.842-3.842A3.839,3.839,0,0,1,6.243,10.084Z" />
        </svg>
        <span></span></span></a>

    <a href="" className={styles.navigationLink,styles.mobileNavAddButton, styles.mobile}><span
        className={styles.navgiationLinkInnerContent}><svg xmlns="http://www.w3.org/2000/svg" width="18.268"
          height="18.268" viewBox="0 0 18.268 18.268">
          <path id="Icon_awesome-plus" data-name="Icon awesome-plus"
            d="M16.963,9.427H11.091V3.555a1.3,1.3,0,0,0-1.3-1.3h-1.3a1.3,1.3,0,0,0-1.3,1.3V9.427H1.3a1.3,1.3,0,0,0-1.3,1.3v1.3a1.3,1.3,0,0,0,1.3,1.3H7.177v5.872a1.3,1.3,0,0,0,1.3,1.3h1.3a1.3,1.3,0,0,0,1.3-1.3V13.341h5.872a1.3,1.3,0,0,0,1.3-1.3v-1.3A1.3,1.3,0,0,0,16.963,9.427Z"
            transform="translate(0 -2.25)" fill="#fff" />
        </svg>
        <span></span></span></a>

    <a href="" className={styles.navigationLink, styles.mobile}><span className={styles.navgiationLinkInnerContent}>
        <svg xmlns="http://www.w3.org/2000/svg" width="17.5" height="20" viewBox="0 0 17.5 20">
          <path id="Icon_awesome-bell" data-name="Icon awesome-bell"
            d="M8.75,20a2.5,2.5,0,0,0,2.5-2.5h-5A2.5,2.5,0,0,0,8.75,20Zm8.414-5.848C16.409,13.341,15,12.121,15,8.125a6.169,6.169,0,0,0-5-6.061V1.25a1.249,1.249,0,1,0-2.5,0v.814a6.169,6.169,0,0,0-5,6.061c0,4-1.412,5.216-2.167,6.027A1.22,1.22,0,0,0,0,15a1.251,1.251,0,0,0,1.254,1.25H16.246A1.251,1.251,0,0,0,17.5,15a1.22,1.22,0,0,0-.336-.848Z"
            transform="translate(0)" />
        </svg><span></span></span></a>


    <a href="" className={styles.navigationLink, styles.mobile}><span className={styles.accountLink}><img
        className={styles.profileImg}  src="https://picsum.photos/30/30" alt="" /></span></a>



    <a href="" className={styles.navigationLink, styles.desktop}><span className={styles.navgiationLinkInnerContent}><svg
          xmlns="http://www.w3.org/2000/svg" width="40.5" height="31.5" viewBox="0 0 40.5 31.5">
          <path id="Icon_awesome-comments" data-name="Icon awesome-comments"
            d="M29.25,13.5c0-6.216-6.546-11.25-14.625-11.25S0,7.284,0,13.5a9.539,9.539,0,0,0,2.672,6.469A15.826,15.826,0,0,1,.155,23.8a.559.559,0,0,0-.105.612.551.551,0,0,0,.513.337A12.38,12.38,0,0,0,6.8,22.992a17.891,17.891,0,0,0,7.826,1.758C22.7,24.75,29.25,19.716,29.25,13.5Zm8.578,15.469A9.526,9.526,0,0,0,40.5,22.5c0-4.7-3.762-8.733-9.091-10.413A10.449,10.449,0,0,1,31.5,13.5c0,7.446-7.573,13.5-16.875,13.5a21.081,21.081,0,0,1-2.229-.134c2.215,4.043,7.418,6.884,13.479,6.884A17.793,17.793,0,0,0,33.7,31.992a12.38,12.38,0,0,0,6.237,1.758.554.554,0,0,0,.513-.338.563.563,0,0,0-.105-.612A15.658,15.658,0,0,1,37.828,28.969Z"
            transform="translate(0 -2.25)" />
        </svg>
        <span>Forum</span></span></a>


    <a href="" className={styles.navigationLink, styles.desktop}>
      <span className={styles.navgiationLinkInnerContent}>
        <svg
          xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
          <path id="Icon_awesome-layer-group" data-name="Icon awesome-layer-group"
            d="M.727,8.673l13.649,6.192a1.5,1.5,0,0,0,1.247,0L29.272,8.673a1.309,
            1.309,0,0,0,0-2.345L15.624.135a1.5,1.5,0,0,0-1.247,0L.727,6.327a1.31,
            1.31,0,0,0,0,2.346Zm28.545,5.173-3.4-1.543L16.4,16.6a3.377,3.377,0,0,
            1-2.8,0L4.131,12.3l-3.4,1.543a1.308,1.308,0,0,0,0,2.344l13.649,6.187a1.5,
            1.5,0,0,0,1.247,0l13.649-6.187a1.308,1.308,0,0,0,0-2.344Zm0,7.488L25.882,
            19.8,16.4,24.1a3.377,3.377,0,0,1-2.8,0L4.118,19.8.727,21.334a1.308,1.308,
            0,0,0,0,2.344l13.649,6.187a1.5,1.5,0,0,0,1.247,0l13.649-6.187a1.308,1.308,
            0,0,0,0-2.344Z"
            transform="translate(0 0.001)" />
        </svg>
        <span>Discover</span></span></a>


    <a href="" className={styles.navigationLink, styles.desktop}><span className={styles.navgiationLinkInnerContent}><svg
          xmlns="http://www.w3.org/2000/svg" width="22.5" height="30" viewBox="0 0 22.5 30">
          <path id="Icon_awesome-bookmark" data-name="Icon awesome-bookmark"
            d="M0,30V2.813A2.812,2.812,0,0,1,2.813,0H19.688A2.812,2.812,0,0,1,22.5,2.813V30L11.25,23.438Z" />
        </svg>
        <span>Saved</span></span></a>
  </div>

  <a href="" className={styles.navigationLink, styles.desktop}><span className={styles.navgiationLinkInnerContent}><svg
        xmlns="http://www.w3.org/2000/svg" width="29.181" height="30" viewBox="0 0 29.181 30">
        <path id="Icon_material-settings" data-name="Icon material-settings"
          d="M29.145,19.47a11.69,11.69,0,0,0,.1-1.47,11.69,11.69,0,0,0-.1-1.47l3.165-2.475a.757.757,0,0,0,.18-.96l-3-5.19a.754.754,0,0,0-.915-.33l-3.735,1.5a10.959,10.959,0,0,0-2.535-1.47l-.57-3.975A.731.731,0,0,0,21,3H15a.731.731,0,0,0-.735.63L13.7,7.605a11.524,11.524,0,0,0-2.535,1.47l-3.735-1.5a.732.732,0,0,0-.915.33l-3,5.19a.74.74,0,0,0,.18.96L6.855,16.53A11.9,11.9,0,0,0,6.75,18a11.9,11.9,0,0,0,.105,1.47L3.69,21.945a.757.757,0,0,0-.18.96l3,5.19a.754.754,0,0,0,.915.33l3.735-1.5a10.959,10.959,0,0,0,2.535,1.47l.57,3.975A.731.731,0,0,0,15,33h6a.731.731,0,0,0,.735-.63l.57-3.975a11.524,11.524,0,0,0,2.535-1.47l3.735,1.5a.732.732,0,0,0,.915-.33l3-5.19a.757.757,0,0,0-.18-.96L29.145,19.47ZM18,23.25A5.25,5.25,0,1,1,23.25,18,5.256,5.256,0,0,1,18,23.25Z"
          transform="translate(-3.406 -3)" />
      </svg>
      <span>Settings</span></span></a>
</div> */}

{/*  <div className="navigation-container">
    <div className="navigation-inner-links">
      <a href="" className="simple-a navigation-link desktop"><span className="account-link"><img
            src="https://picsum.photos/30/30" alt="" /></span></a>
      <a href="" className="simple-a navigation-link current-page"><span className="navgiation-link-inner-content"><svg
            xmlns="http://www.w3.org/2000/svg" width="38.579" height="30" viewBox="0 0 38.579 30">
            <path id="Icon_awesome-home" data-name="Icon awesome-home"
              d="M18.777,10.036,6.429,20.206V31.182A1.072,1.072,0,0,0,7.5,32.254l7.5-.019a1.072,1.072,0,0,0,1.066-1.072v-6.41a1.072,1.072,0,0,1,1.072-1.072H21.43A1.072,1.072,0,0,1,22.5,24.753v6.405a1.072,1.072,0,0,0,1.072,1.075l7.5.021a1.072,1.072,0,0,0,1.072-1.072V20.2L19.8,10.036A.816.816,0,0,0,18.777,10.036Zm19.5,6.912-5.6-4.615V3.057a.8.8,0,0,0-.8-.8h-3.75a.8.8,0,0,0-.8.8V7.92l-6-4.933a3.215,3.215,0,0,0-4.085,0L.291,16.948A.8.8,0,0,0,.183,18.08l1.708,2.076a.8.8,0,0,0,1.132.109L18.777,7.29a.816.816,0,0,1,1.025,0L35.555,20.266a.8.8,0,0,0,1.132-.107l1.708-2.076a.8.8,0,0,0-.114-1.134Z"
              transform="translate(0.001 -2.254)" />
          </svg>
          <span>Home</span></span></a>
  
      <a href="" className="simple-a navigation-link mobile"><span className="navgiation-link-inner-content"><svg
            xmlns="http://www.w3.org/2000/svg" width="15.365" height="15.368" viewBox="0 0 15.365 15.368">
            <path id="Icon_awesome-search" data-name="Icon awesome-search"
              d="M15.156,13.286l-2.992-2.992a.72.72,0,0,0-.51-.21h-.489a6.24,6.24,0,1,0-1.08,1.08v.489a.72.72,0,0,0,.21.51l2.992,2.992a.717.717,0,0,0,1.017,0l.849-.849a.724.724,0,0,0,0-1.02Zm-8.914-3.2a3.842,3.842,0,1,1,3.842-3.842A3.839,3.839,0,0,1,6.243,10.084Z" />
          </svg>
          <span></span></span></a>
  
      <a href="" className="simple-a navigation-link mobile mobile-nav-add-button"><span
          className="navgiation-link-inner-content"><svg xmlns="http://www.w3.org/2000/svg" width="18.268" height="18.268"
            viewBox="0 0 18.268 18.268">
            <path id="Icon_awesome-plus" data-name="Icon awesome-plus"
              d="M16.963,9.427H11.091V3.555a1.3,1.3,0,0,0-1.3-1.3h-1.3a1.3,1.3,0,0,0-1.3,1.3V9.427H1.3a1.3,1.3,0,0,0-1.3,1.3v1.3a1.3,1.3,0,0,0,1.3,1.3H7.177v5.872a1.3,1.3,0,0,0,1.3,1.3h1.3a1.3,1.3,0,0,0,1.3-1.3V13.341h5.872a1.3,1.3,0,0,0,1.3-1.3v-1.3A1.3,1.3,0,0,0,16.963,9.427Z"
              transform="translate(0 -2.25)" fill="#fff" />
          </svg>
          <span></span></span></a>
  
      <a href="" className="simple-a navigation-link mobile"><span className="navgiation-link-inner-content">
          <svg xmlns="http://www.w3.org/2000/svg" width="17.5" height="20" viewBox="0 0 17.5 20">
            <path id="Icon_awesome-bell" data-name="Icon awesome-bell"
              d="M8.75,20a2.5,2.5,0,0,0,2.5-2.5h-5A2.5,2.5,0,0,0,8.75,20Zm8.414-5.848C16.409,13.341,15,12.121,15,8.125a6.169,6.169,0,0,0-5-6.061V1.25a1.249,1.249,0,1,0-2.5,0v.814a6.169,6.169,0,0,0-5,6.061c0,4-1.412,5.216-2.167,6.027A1.22,1.22,0,0,0,0,15a1.251,1.251,0,0,0,1.254,1.25H16.246A1.251,1.251,0,0,0,17.5,15a1.22,1.22,0,0,0-.336-.848Z"
              transform="translate(0)" />
          </svg><span></span></span></a>
  
  
      <a href="" className="simple-a navigation-link mobile"><span className="account-link"><img src="https://picsum.photos/30/30" alt="" /></span></a>
  
  
  
      <a href="" className="simple-a navigation-link desktop"><span className="navgiation-link-inner-content"><svg
            xmlns="http://www.w3.org/2000/svg" width="40.5" height="31.5" viewBox="0 0 40.5 31.5">
            <path id="Icon_awesome-comments" data-name="Icon awesome-comments"
              d="M29.25,13.5c0-6.216-6.546-11.25-14.625-11.25S0,7.284,0,13.5a9.539,9.539,0,0,0,2.672,6.469A15.826,15.826,0,0,1,.155,23.8a.559.559,0,0,0-.105.612.551.551,0,0,0,.513.337A12.38,12.38,0,0,0,6.8,22.992a17.891,17.891,0,0,0,7.826,1.758C22.7,24.75,29.25,19.716,29.25,13.5Zm8.578,15.469A9.526,9.526,0,0,0,40.5,22.5c0-4.7-3.762-8.733-9.091-10.413A10.449,10.449,0,0,1,31.5,13.5c0,7.446-7.573,13.5-16.875,13.5a21.081,21.081,0,0,1-2.229-.134c2.215,4.043,7.418,6.884,13.479,6.884A17.793,17.793,0,0,0,33.7,31.992a12.38,12.38,0,0,0,6.237,1.758.554.554,0,0,0,.513-.338.563.563,0,0,0-.105-.612A15.658,15.658,0,0,1,37.828,28.969Z"
              transform="translate(0 -2.25)" />
          </svg>
          <span>Forum</span></span></a>
  
  
      <a href="" className="simple-a navigation-link desktop"><span className="navgiation-link-inner-content"><svg
            xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
            <path id="Icon_awesome-layer-group" data-name="Icon awesome-layer-group"
              d="M.727,8.673l13.649,6.192a1.5,1.5,0,0,0,1.247,0L29.272,8.673a1.309,1.309,0,0,0,0-2.345L15.624.135a1.5,1.5,0,0,0-1.247,0L.727,6.327a1.31,1.31,0,0,0,0,2.346Zm28.545,5.173-3.4-1.543L16.4,16.6a3.377,3.377,0,0,1-2.8,0L4.131,12.3l-3.4,1.543a1.308,1.308,0,0,0,0,2.344l13.649,6.187a1.5,1.5,0,0,0,1.247,0l13.649-6.187a1.308,1.308,0,0,0,0-2.344Zm0,7.488L25.882,19.8,16.4,24.1a3.377,3.377,0,0,1-2.8,0L4.118,19.8.727,21.334a1.308,1.308,0,0,0,0,2.344l13.649,6.187a1.5,1.5,0,0,0,1.247,0l13.649-6.187a1.308,1.308,0,0,0,0-2.344Z"
              transform="translate(0 0.001)" />
          </svg>
          <span>Discover</span></span></a>
  
  
      <a href="" className="simple-a navigation-link desktop"><span className="navgiation-link-inner-content"><svg
            xmlns="http://www.w3.org/2000/svg" width="22.5" height="30" viewBox="0 0 22.5 30">
            <path id="Icon_awesome-bookmark" data-name="Icon awesome-bookmark"
              d="M0,30V2.813A2.812,2.812,0,0,1,2.813,0H19.688A2.812,2.812,0,0,1,22.5,2.813V30L11.25,23.438Z" />
          </svg>
          <span>Saved</span></span></a>
    </div>
  
    <a href="" className="simple-a navigation-links desktop"><span className="navgiation-link-inner-content"><svg
          xmlns="http://www.w3.org/2000/svg" width="29.181" height="30" viewBox="0 0 29.181 30">
          <path id="Icon_material-settings" data-name="Icon material-settings"
            d="M29.145,19.47a11.69,11.69,0,0,0,.1-1.47,11.69,11.69,0,0,0-.1-1.47l3.165-2.475a.757.757,0,0,0,.18-.96l-3-5.19a.754.754,0,0,0-.915-.33l-3.735,1.5a10.959,10.959,0,0,0-2.535-1.47l-.57-3.975A.731.731,0,0,0,21,3H15a.731.731,0,0,0-.735.63L13.7,7.605a11.524,11.524,0,0,0-2.535,1.47l-3.735-1.5a.732.732,0,0,0-.915.33l-3,5.19a.74.74,0,0,0,.18.96L6.855,16.53A11.9,11.9,0,0,0,6.75,18a11.9,11.9,0,0,0,.105,1.47L3.69,21.945a.757.757,0,0,0-.18.96l3,5.19a.754.754,0,0,0,.915.33l3.735-1.5a10.959,10.959,0,0,0,2.535,1.47l.57,3.975A.731.731,0,0,0,15,33h6a.731.731,0,0,0,.735-.63l.57-3.975a11.524,11.524,0,0,0,2.535-1.47l3.735,1.5a.732.732,0,0,0,.915-.33l3-5.19a.757.757,0,0,0-.18-.96L29.145,19.47ZM18,23.25A5.25,5.25,0,1,1,23.25,18,5.256,5.256,0,0,1,18,23.25Z"
            transform="translate(-3.406 -3)" />
        </svg>
        <span>Settings</span></span></a>
  </div> */}



    
   