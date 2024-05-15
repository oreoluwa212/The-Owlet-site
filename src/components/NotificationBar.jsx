import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

function NotificationBar() {
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const isNotificationDismissed = localStorage.getItem(
      "notificationDismissed"
    );
    if (isNotificationDismissed === "true") {
      setShowNotification(false);
    }
    setShowNotification(true);
  }, []);

  const dismissNotification = () => {
    localStorage.setItem("notificationDismissed", "true");
    setShowNotification(false);
  };

  return (
    <div>
      {showNotification && (
        <div className="bg-primary w-full py-3 flex justify-center items-center text-white">
          <div className="lgss:w-[40%]"></div>
          <div className="w-full lgss:w-[55%] flex justify-between items-center lgss:px-0 px-5">
            <div className="flex flex-col lg:flex-row gap-2 lgss:items-center">
              <p className="font-semibold">
                We&apos;ve just launched a new website!
              </p>
              <p>
                Check out the <span className="underline cursor-pointer">new dashboard</span>
              </p>
            </div>
            <div>
              <FaTimes className="cursor-pointer" onClick={dismissNotification} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NotificationBar;
