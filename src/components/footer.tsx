import { Footerdiv, Footerdiv00, Footerdiv1, Footerdiv2, Footerdiv3, Footerdiv3button, Footerdiv3button1, Footerdiv3button2, Footerdiv4, Footerdiv41 } from "./stylecomponent"






const Footercomponent = () => {


  return (


  <Footerdiv>
   
   <Footerdiv1>
    <img src="" alt="" />
    <img src="" alt="" />
    <img src="" alt="" />
    <img src="" alt="" />
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