import React, { useEffect, useState } from "react";
import axios from "axios";
import { BiHomeAlt } from "react-icons/bi"
import {TbWorldWww} from "react-icons/tb"
import {FiPhone} from "react-icons/fi"
import {TbMail} from "react-icons/tb"

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    function fetchUser() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setListOfUser(res.data))
        .catch((err) => setError(err));
    }
    fetchUser();
  }, []);
  
  return (
    <>
      {listOfUser.map((user) => (
        <div
          key={user.id}
          className="relative md:max-w-2xl mt-[9em] min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl "
        >
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full flex justify-center">
                <div className="relative">
                  <img
                    src={`https://api.lorem.space/image/face?w=150&h=150&random=${user.id}`}
                    className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                  />
                </div>
              </div>
              <div className="w-full text-center mt-20">
                <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                  <div className="p-3 text-center">
                    <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
                      {user.name}
                    </h3>
                    <span className="text-slate-700 font-bold leading-normal">({user.username})</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-2">
              <div className="flex items-center gap-2 text-xs mb-2 text-slate-400 font-bold justify-center">
              <BiHomeAlt className="text-xl "/> <div className="place-items-center">{user.address.suite}, {user.address.street}, {user.address.city}</div>
              </div>
            </div>
            <div className="mt-6 py-6 border-t border-slate-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-4 flex flex-col gap-2 ">
                  <p className="font-light leading-relaxed text-slate-600 flex items-center gap-2">
                    <TbMail/>{user.email}
                  </p>
                  <p className="font-normal text-slate-700 hover:text-slate-400 flex items-center gap-2">
                   <FiPhone/> {user.phone}
                  </p>
                  
                  <a href={`https://${user.website}/`} className="font-normal text-slate-700 hover:text-slate-400 flex items-center gap-2 ">
                  <TbWorldWww/> {user.website}
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default UserList;
