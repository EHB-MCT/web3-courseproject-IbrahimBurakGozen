// import MobileNavigationContainer from './mobile-navigation-container/MobileNavigationContainer';
// import './TopNavigation.scss';
// // import MobileNavigationContainer from "./mobile-navigation-container/MobileNavigationContainer";


// const TopNavigation = (props)=> {

//     return ( 
//         <div className="top-bar-container">
//             <div className="top-bar-container-mobile mobile">

//                 <div className="top-bar-first-row-container">
//                 <Link to='/home' style={{ textDecoration: 'none' }} ><h1 className="logo-mobile">already</h1></Link>
//                         <div className="top-navigation-bar-mobile">

//                             <Link className="simple-a react-links">
//                             <button className="notification-button top-bar-button simple-button" ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
//                             <path  id="Icon_awesome-user-alt" data-name="Icon awesome-user-alt" d="M10,11.25A5.625,5.625,0,1,0,4.375,5.625,5.626,5.626,0,0,0,10,11.25Zm5,1.25H12.848a6.8,6.8,0,0,1-5.7,0H5a5,5,0,0,0-5,5v.625A1.875,1.875,0,0,0,1.875,20h16.25A1.875,1.875,0,0,0,20,18.125V17.5A5,5,0,0,0,15,12.5Z"/>
//                             </svg></button></Link>

//                             <button className="notification-button top-bar-button simple-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17.5" viewBox="0 0 20 17.5">
//                             <path  id="Icon_awesome-heart" data-name="Icon awesome-heart" d="M18.058,3.444a5.342,5.342,0,0,0-7.289.531L10,4.768l-.77-.793a5.341,5.341,0,0,0-7.289-.531,5.609,5.609,0,0,0-.387,8.121l7.558,7.8a1.225,1.225,0,0,0,1.769,0l7.558-7.8a5.605,5.605,0,0,0-.383-8.121Z" transform="translate(0.001 -2.248)"/>
//                             </svg></button>

//                             <button className="add-button top-bar-button simple-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17.778" viewBox="0 0 20 17.778">
//                             <path id="Icon_awesome-shopping-cart" data-name="Icon awesome-shopping-cart" d="M18.338,10.462,19.979,3.24a.833.833,0,0,0-.813-1.018H5.528L5.21.666A.833.833,0,0,0,4.393,0H.833A.833.833,0,0,0,0,.833v.556a.833.833,0,0,0,.833.833H3.26L5.7,14.147a1.945,1.945,0,1,0,2.328.3h7.279a1.944,1.944,0,1,0,2.208-.361l.192-.843a.833.833,0,0,0-.813-1.018H7.574l-.227-1.111H17.525A.833.833,0,0,0,18.338,10.462Z"/>
//                             </svg></button>
//                     </div>
//                 </div>

//                 <div className="top-bar-second-row-container">

//                     <button className="add-button top-bar-button simple-button mobile-navigatie-hamburger-menu" id="nav-button">
//                         <div className="mobile-navigatie-hamburger-menu-top"></div>
//                         <div className="mobile-navigatie-hamburger-menu-middle"></div>
//                         <div className="mobile-navigatie-hamburger-menu-bottom"></div>
//                     </button>

//                     <MobileNavigationContainer/>

//                     <input className="top-bar-search-bar" type="text" placeholder="Search..." />
                        
//                 </div>

//             </div>


//             <div className="top-bar-container-desktop">
//                 <h1 className="logo-desktop">already</h1>

//                 <input className="top-bar-search-bar" type="text" placeholder="Search..." />

//                 <div className="button-container">
//                     <button className="notification-button top-bar-button simple-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
//                     <path  fill="#FFF" id="Icon_awesome-user-alt" data-name="Icon awesome-user-alt" d="M10,11.25A5.625,5.625,0,1,0,4.375,5.625,5.626,5.626,0,0,0,10,11.25Zm5,1.25H12.848a6.8,6.8,0,0,1-5.7,0H5a5,5,0,0,0-5,5v.625A1.875,1.875,0,0,0,1.875,20h16.25A1.875,1.875,0,0,0,20,18.125V17.5A5,5,0,0,0,15,12.5Z"/>
//                     </svg></button>

//                     <button className="notification-button top-bar-button simple-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17.5" viewBox="0 0 20 17.5">
//                     <path  fill="#FFF" id="Icon_awesome-heart" data-name="Icon awesome-heart" d="M18.058,3.444a5.342,5.342,0,0,0-7.289.531L10,4.768l-.77-.793a5.341,5.341,0,0,0-7.289-.531,5.609,5.609,0,0,0-.387,8.121l7.558,7.8a1.225,1.225,0,0,0,1.769,0l7.558-7.8a5.605,5.605,0,0,0-.383-8.121Z" transform="translate(0.001 -2.248)"/>
//                     </svg></button>

//                     <button className="add-button top-bar-button simple-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17.778" viewBox="0 0 20 17.778">
//                     <path fill="#FFF" id="Icon_awesome-shopping-cart" data-name="Icon awesome-shopping-cart" d="M18.338,10.462,19.979,3.24a.833.833,0,0,0-.813-1.018H5.528L5.21.666A.833.833,0,0,0,4.393,0H.833A.833.833,0,0,0,0,.833v.556a.833.833,0,0,0,.833.833H3.26L5.7,14.147a1.945,1.945,0,1,0,2.328.3h7.279a1.944,1.944,0,1,0,2.208-.361l.192-.843a.833.833,0,0,0-.813-1.018H7.574l-.227-1.111H17.525A.833.833,0,0,0,18.338,10.462Z"/>
//                     </svg></button>
//                 </div>
//             </div>
//         </div>
//     );
// }
 
// export default TopNavigation;