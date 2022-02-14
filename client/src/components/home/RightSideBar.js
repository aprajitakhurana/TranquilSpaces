import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import UserCard from "../UserCard";
import FollowBtn from "../FollowBtn";
import LoadIcon from "../../images/loading.gif";

import { getSuggestions } from "../../redux/actions/suggestionsAction";


const RightSideBar = () => {

    const { auth, suggestions } = useSelector((state) => state);
    const dispatch = useDispatch();


    return (
      <div className="my-4 "style={{ border: "2px solid #4F3961"
      }}>
        <div className="inner-shadow" style={{ borderRadius:"1px" }}>
          <UserCard user={auth.user} />
        </div>
        <div className="d-flex justify-content-between align-items-center my-2">
          <h5
            className="color-c1"
            style={{ marginLeft:"5px",fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}
          >
               Suggestions
          </h5>
          {!suggestions.loading && (
            <div className="outer-shadow hover-in-shadow btn-1 d-flex justify-content-center align-items-center">
              <i
                className="fas fa-redo "
                style={{ cursor: "pointer" }}
                onClick={() => dispatch(getSuggestions(auth.token))}
              />
            </div>
          )}
        </div>

        {suggestions.loading ? (
          <img
            src={LoadIcon}
            alt="Loading..."
            className="d-block mx-auto my-4"
          />
        ) : (
          <div className="suggestions"style={{fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
            {suggestions.users.map((user) => (
              <div
                key={user._id}
                className=" mb-3 inner-shadow"
                style={{ borderRadius: "5px",fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
              >
                <UserCard key={user._id} user={user} style={{fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
                  <FollowBtn key={user._id} user={user} borderRadius ="2px" />
                </UserCard>
              </div>
            ))}
          </div>
        )}
      </div>
    );
}

export default RightSideBar
