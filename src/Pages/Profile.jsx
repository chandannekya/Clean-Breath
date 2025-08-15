import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaCalendarAlt, FaBlog, FaBookOpen, FaSeedling } from "react-icons/fa";
import { getUserProfile } from "../service/oprations/profileApi";

const Profile = () => {
  const { user, islogin, token } = useSelector((state) => state.auth);
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProfileData = async () => {
      if (token && islogin) {
        try {
          const result = await dispatch(getUserProfile(token));
          setProfileData(result.user);
        } catch (error) {
          console.error("Failed to fetch profile data:", error);
          // Use existing user data as fallback
          setProfileData(user);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [token, islogin, dispatch, user]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!islogin || !profileData) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Please log in to view your profile
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            You need to be logged in to access this page.
          </p>
        </div>
      </div>
    );
  }

  const profileSections = [
    {
      title: "Personal Information",
      icon: <FaUser className="text-green-600 dark:text-green-400" />,
      content: [
        { label: "Username", value: profileData.username || "Not provided", icon: <FaUser /> },
        { label: "Email", value: profileData.email || "Not provided", icon: <FaEnvelope /> },
        { 
          label: "Member Since", 
          value: profileData.createdAt 
            ? new Date(profileData.createdAt).toLocaleDateString()
            : "Early 2025", // Show a reasonable date for existing users
          icon: <FaCalendarAlt />
        },
      ]
    },
    {
      title: "Activity Stats",
      icon: <FaBlog className="text-green-600 dark:text-green-400" />,
      content: [
        { 
          label: "Blogs Created", 
          value: profileData.blogs ? profileData.blogs.length : 0,
          icon: <FaBlog />
        },
        { 
          label: "Articles Read", 
          value: profileData.articlesRead ? profileData.articlesRead.length : 0,
          icon: <FaBookOpen />
        },
        { 
          label: "Plants in Collection", 
          value: profileData.userPlants ? profileData.userPlants.length : 0,
          icon: <FaSeedling />
        },
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4"
    >
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8"
        >
          <div className="text-center">
            {/* Profile Avatar */}
            <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <FaUser className="text-3xl text-white" />
            </div>
            
            {/* User Info */}
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
              {profileData.username || "User"}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              {profileData.email}
            </p>
            
            {/* Status Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 mt-4">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Active Member
            </div>
          </div>
        </motion.div>

        {/* Profile Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {profileSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + sectionIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6"
            >
              {/* Section Header */}
              <div className="flex items-center mb-6">
                <div className="text-2xl mr-3">{section.icon}</div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                  {section.title}
                </h2>
              </div>

              {/* Section Content */}
              <div className="space-y-4">
                {section.content.map((item, itemIndex) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + itemIndex * 0.1 }}
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <div className="flex items-center">
                      <div className="text-gray-500 dark:text-gray-400 mr-3">
                        {item.icon}
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-gray-900 dark:text-gray-100 font-semibold">
                      {item.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Activity Section (Placeholder for future features) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mt-8"
        >
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
            <FaBlog className="text-green-600 dark:text-green-400 mr-3" />
            Recent Activity
          </h2>
          <div className="text-center py-8">
            <div className="text-gray-400 dark:text-gray-500 text-lg">
              Recent activity will be shown here
            </div>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Create blogs, read articles, and add plants to see your activity!
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Profile;
