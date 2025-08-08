
// "use client";

// import { useAuthStore } from "@/lib/auth-store";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Headers from "../components/Header"


// const ProfilePage = () => {
//   const { isAuthenticated, name, email, token, signOut} = useAuthStore();
//   const router = useRouter();
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     if (!isAuthenticated) {
//       router.push("/"); // Redirect to sign in if not logged in
//     } else {
//       // Fetch purchase history
//       const fetchOrders = async () => {
//         try {
//           const res = await fetch(`https://biriyanidev.onrender.com/api/orders`,{
//              method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//               "Authorization": `Bearer ${token}`,
//             },
//           }
//           )
          
//           const data = await res.json();
//           console.log(data);
//           setOrders(data.orders || []);
//         } catch (error) {
//           console.error("Failed to fetch orders", error);
//         }
//       };

//       fetchOrders();
//     }
//   }, [isAuthenticated, name, email, token]);

//   if (!isAuthenticated) return null;

//   return (
    


//     <>
//       {/* HEAD STYLES */}
//       <link href="/css/bootstrap.css" rel="stylesheet" />
//       <link href="/css/style.css" rel="stylesheet" />
//       <link href="/css/responsive.css" rel="stylesheet" />
//       <link rel="icon" href="/images/favicon.png" type="image/x-icon" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
// <div className="page-wrapper">
//    <Headers/>
 
//   <section className="inner-banner">
//     <div
//       className="image-layer"
//       style={{ backgroundImage: "url(images/background/banner-image-1.jpg)" }}
//     />
//     <div className="auto-container">
//       <div className="inner">
//         <div className="subtitle">
//           <span>User Details</span>
//         </div>
//         <div className="pattern-image">
//           <img src="images/icons/separator.svg" alt="" title="" />
//         </div>
//         <h1>
//           <span>Account</span>
//         </h1>
//       </div>
//     </div>
//   </section>

//     <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-10">
//       {/* Left section */}
//       <div className="flex-1">
//         {/* <h1 className="text-3xl font-semibold mb-2">Account</h1> */}
//         <button
//           className="text-blue-600 underline text-sm flex items-center gap-1 mb-6"
//           onClick={() => {
//               signOut()
//             router.push("/");
//           }}
//         >
//            Log out
//         </button>

//         {/* Order History */}
//         <h2 className="text-xl font-semibold mb-4">Order history</h2>
//         <div className="border border-gray-200 rounded-md overflow-hidden text-sm">
//           <div className="grid grid-cols-5 bg-gray-100 p-3 font-medium text-gray-600 uppercase text-xs">
//             <div>Order</div>
//             <div>Date</div>
//             <div>Payment Status</div>
//           <div>Menu Item</div>
//             <div className="text-right">Total</div>
//           </div>

//           {orders.length === 0 ? (
//             <div className="p-4 text-gray-500">No orders yet.</div>
//           ) : (
//             orders.map((order) => (
//               <div
//                 key={order._id}
//                 className="grid grid-cols-5 items-center border-t px-4 py-3"
//               >
//                 <div className="text-blue-600 font-medium">
//                   #{order._id.slice(-4)}
//                 </div>
//                 <div className="font-medium">
//                   {new Date(order.createdAt).toLocaleDateString("en-US", {
//                     year: "numeric",
//                     month: "long",
//                     day: "numeric",
//                   })}
//                 </div>
//                 <div className="text-green-700 font-medium">Paid</div>
//                 <div className="text-green-700 font-medium">{order.items[1].menuItem.name}</div>
//                 <div className="text-right font-semibold">
//                   ₹{order.totalAmount.toFixed(2)}
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>

    
//       <div className="w-full md:w-1/3">
//         <h3 className="text-xl font-semibold mb-4 mt-4">Account details</h3>
//         <div className="border border-gray-200 rounded-md p-4 text-sm text-gray-700 leading-6 bg-white">
//        <p className="capitalize">{name}</p>
//       < p>{orders[0]?.addressStreet}</p>
//   <p>{orders[0]?.addressCity}</p>
//   <p>{orders[0]?.addressZip}</p>
//   <p>{orders[0]?.phoneNumber}</p>
            
//         </div>
       
//       </div>
//     </div>
// </div>
    
//     </>

//   );
// };

// export default ProfilePage;



"use client";

import { useAuthStore } from "@/lib/auth-store";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Headers from "../components/Header";

const ProfilePage = () => {
  const { isAuthenticated, name, email, token, signOut } = useAuthStore();
  const router = useRouter();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/");
    } else {
      const fetchOrders = async () => {
        try {
          const res = await fetch(`https://biriyanidev.onrender.com/api/orders`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });

          const data = await res.json();
          console.log("Fetched Order:", data);
          // setOrders(data || []);
          setOrders(data.orders || []);
        } catch (error) {
          console.error("Failed to fetch orders", error);
        }
      };

      fetchOrders();
    }
  }, [isAuthenticated, token]);

  if (!isAuthenticated) return null;

  return (
    <>
     

      <div className="page-wrapper">
     

        {/* Banner */}
        <section className="inner-banner">
          
          <div
            className="image-layer"
            style={{ backgroundImage: "url(images/background/banner-image-1.jpg)" }}
          />
          <div className="auto-container">
            <div className="inner">
              <div className="subtitle">
                <span>User Details</span>
              </div>
              <div className="pattern-image">
                <img src="images/icons/separator.svg" alt="" title="" />
              </div>
              <h1>
                <span>Account</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-10">
          {/* Left Section: Orders */}
          <div className="flex-1">

            
           
            

            <h2 className="text-xl font-semibold mb-4">Order History</h2>
            <div className="border border-gray-200 rounded-md overflow-hidden text-sm">
              <div className="grid grid-cols-5 bg-gray-100 p-3 font-medium text-gray-600 uppercase text-xs">
                <div>Order</div>
                <div>Date</div>
                <div>Payment Status</div>
                <div>Menu Item</div>
                <div className="text-right">Total</div>
              </div>

              {orders.length === 0 ? (
                <div className="p-4 text-gray-500">No orders yet.</div>
              ) : (
                orders.map((order) => (
                  <div
                    key={order._id}
                    className="grid grid-cols-5 items-center border-t px-4 py-3"
                  >
                    <div className="text-blue-600 font-medium">
                      #{order._id.slice(-4)}
                    </div>
                    <div className="font-medium">
                      {new Date(order.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <div className="text-green-700 font-medium capitalize">
                      {order.paymentMethod}
                    </div>
                    <div className="text-gray-700 font-medium truncate">
                      {order.items.map((item) => item.menuItem.name).join(", ")}
                    </div>
                    <div className="text-right font-semibold">
                      ₹{order.totalAmount.toFixed(2)}
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="flex gap-4 mb-6 mt-5">
  <button
    className="text-gray-600 underline text-sm flex items-center gap-1"
    onClick={() => router.back()}
  >
    ← Back
  </button>

  <button
    className="text-blue-600 underline text-sm flex items-center gap-1"
    onClick={() => {
      signOut();
      router.push("/");
    }}
  >
    Log out
  </button>
</div>
          </div>

          {/* Right Section: Account Details */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4 mt-4">User details</h3>
            <div className="border border-gray-200 rounded-md p-4 text-sm text-gray-700 leading-6 bg-white">
              <p className="capitalize">{name}</p>
             
              {/* <p>{orders[0]?.addressstreet}</p>
<p>{orders[0]?.addresscity}</p>
<p>{orders[0]?.addresszip}</p>
<p>{orders[0]?.phoneNumber}</p> */}
{/* <p>{order.address[street]}</p> */}
<p>{orders[0]?.address?.city}</p>
<p>{orders[0]?.address?.zip}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
