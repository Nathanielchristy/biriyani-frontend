
"use client";

import { useAuthStore } from "@/lib/auth-store";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


const ProfilePage = () => {
  const { isAuthenticated, name, email, token, signOut} = useAuthStore();
  const router = useRouter();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/"); // Redirect to sign in if not logged in
    } else {
      // Fetch purchase history
      const fetchOrders = async () => {
        try {
          const res = await fetch(`https://biriyanidev.onrender.com/api/orders`,{
             method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
            },
          }
          )
          
          const data = await res.json();
          console.log(data);
          setOrders(data);
        } catch (error) {
          console.error("Failed to fetch orders", error);
        }
      };

      fetchOrders();
    }
  }, [isAuthenticated, name, email, token]);

  if (!isAuthenticated) return null;

  return (
    // <div className="max-w-4xl mx-auto p-6">
    //   <h1 className="text-3xl font-bold mb-4">User Profile</h1>
    //   <div className="bg-white p-4 rounded shadow mb-6">
    //     <p><strong>Name:</strong> {name}</p>
        
    //     <p><strong>Email:</strong> {email}</p>
    //   </div>

    //   <h2 className="text-2xl font-semibold mb-2">🛒 Purchase History</h2>
    //   {orders.length === 0 ? (
    //     <p>No orders yet.</p>
    //   ) : (
    //     <ul className="space-y-4">
    //       <p>{orders['customer']}</p> 
    //       {orders.map((order) => (
    //         <li key={order._id} className="p-4 border rounded shadow-sm">
                 
    //           <p><strong>Order ID:</strong> {order._id}</p>
              
    //             <p>
    //                 <strong>Menu Item:</strong> {order.items[1].menuItem.name}</p>
                 
    //           {/* <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p> */}
    //           <p><strong>Total:</strong> ₹{order.totalAmount}</p>
    //           <ul className="mt-2 list-disc list-inside">
    //             {order.items.map((item, idx) => (
    //               <li key={idx}>{item.name} (Qty: {item.quantity})</li>
    //             ))}
    //           </ul>
    //         </li>
    //       ))}
    //     </ul>
    //   )}
    // </div>

    <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-10">
      {/* Left section */}
      <div className="flex-1">
        <h1 className="text-3xl font-semibold mb-2">Account</h1>
        <button
          className="text-blue-600 underline text-sm flex items-center gap-1 mb-6"
          onClick={() => {
              signOut()
            router.push("/");
          }}
        >
          <span>🚪</span> Log out
        </button>

        {/* Order History */}
        <h2 className="text-xl font-semibold mb-4">Order history</h2>
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
                <div className="text-green-700 font-medium">Paid</div>
                <div className="text-green-700 font-medium">{order.items[1].menuItem.name}</div>
                <div className="text-right font-semibold">
                  ₹{order.totalAmount.toFixed(2)}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Right section - Account Details */}
      <div className="w-full md:w-1/3">
        <h3 className="text-xl font-semibold mb-4">Account details</h3>
        <div className="border border-gray-200 rounded-md p-4 text-sm text-gray-700 leading-6 bg-white">
       <p className="capitalize">{name}</p>
       {/* <p>{address['street']}</p>  */}
        {/* <p>{address['city']}</p> */}
       {/* <p>{address['zip']}</p> */}
              {/*<p>{user?.address?.line1 || "10/43 nagapattinam"}</p>
          <p>{user?.address?.line2 || "Kulathupalayam"}</p>
          <p>{user?.address?.pincode || "641045 Coimbatore"}</p>
          <p>{user?.address?.country || "India"}</p> */}
        </div>
        <a
          href="#"
          className="text-blue-600 underline text-sm mt-2 inline-block"
        >
          View addresses
        </a>
      </div>
    </div>
  );
};

export default ProfilePage;
