import { Footerdiv, Footerdiv00, Footerdiv1, Footerdiv2, Footerdiv3, Footerdiv3button, Footerdiv3button1, Footerdiv3button2, Footerdiv4, Footerdiv41 } from "./stylecomponent" 
import gmail from "../Rasm/gmail.webp"





const Footercomponent = () => {


  return (


  <Footerdiv>
   
   <Footerdiv1>
   <a href="https://www.instagram.com/farrux__e?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
  <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" 
       alt="Instagram" 
       />
</a>
<a href="https://www.facebook.com/farrux.egamberdiyev.543/about" target="_blank" rel="noopener noreferrer">
  <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
       alt="Facebook" 
       />
</a>
<a href="https://t.me/Farrukhe" target="_blank" rel="noopener noreferrer">
  <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" 
       alt="Telegram"  />
</a>
<a href="mailto:mfarrukhbekn@gmail.com" target="_blank" rel="noopener noreferrer">
 <img src={gmail} alt="" />
   
</a>


   </Footerdiv1>

<Footerdiv00>
    
    <Footerdiv2>
    <h1>Welcome to Ipar</h1>
    <p>Sign up to see our latest collections
    exclusive offers & get 10 % off
    </p>

    <input
        type="email"
        placeholder="Email"
        
      />
      <button
      >
        Sign Up
      </button>

    </Footerdiv2>

    <Footerdiv3>
<h1>Need Help?</h1>
<Footerdiv3button>
    <button>Login</button>
    <button>Contact</button>
</Footerdiv3button>

<Footerdiv3button1>
    <button>Shipping</button>
    <button>FAQS</button>
</Footerdiv3button1>

<Footerdiv3button2>
    <button>Return and refund policy</button>
</Footerdiv3button2>

    </Footerdiv3>

    <Footerdiv4>
        <h1>More Info</h1>

        <div style={{display: 'flex', gap: '55px', marginTop: '30px'}}>
         
         <Footerdiv41>
<p>About</p>
<p>Publishers</p>
<p>Affiliates</p>
<p>Vendors</p>
<p>Blog</p>
<p>Careers</p>

         </Footerdiv41>


         <Footerdiv41>
         <p>Profile</p>
<p>Account</p>
<p>Purchases</p>
<p>Credits</p>
<p>Preferences</p>
            </Footerdiv41>

            <Footerdiv41>
            <p>Accessibility</p>
<p>My Personal</p>
<p>Terms</p>
<p>Privacy</p>
<p>Information</p>
            </Footerdiv41>

        </div>

    </Footerdiv4>

    </Footerdiv00>

  </Footerdiv>

    
  )
}
export default Footercomponent