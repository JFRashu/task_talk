import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowRight, User, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Registration.css'
import '../rashu-styles.css'

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showConPassword, setShowConPassword] = useState(false); // State to toggle password visibility

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConPasswordVisibility = () => {
    setShowConPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration attempted:', { email, password, username });
  };

  return (
    <div className="loginbody">
      <div className="tailwind-scope">
        <div className="tw-min-h-screen tw-flex tw-items-center tw-justify-center tw-p-4 tw-bg-transparent">
          <div className="tw-w-full tw-max-w-md">
            {/* Profile Icon Circle */}
            <div className="tw-flex tw-justify-center">
              <div className="tw-z-10 tw-w-20 tw-h-20 tw-bg-white tw-rounded-full tw-flex tw-items-center tw-justify-center tw-shadow-lg tw-mb-2 tw-border-4 tw-border-blue-500">
                <User className="tw-w-10 tw-h-10 tw-text-blue-500" />
              </div>
            </div>

            {/* Main Card */}
            <div className="tw-bg-white/80 tw-backdrop-blur-sm tw-rounded-2xl tw-shadow-xl tw-border tw-border-white">
              {/* Back Button */}
              <button
                onClick={() => navigate('/login')}
                className="tw-absolute tw-m-4 tw-p-2 tw-text-gray-600 hover:tw-text-blue-500 tw-transition-colors"
              >
                <ArrowLeft className="tw-h-5 tw-w-5" />
              </button>

              <div className="tw-p-8 tw-space-y-7">
                {/* Header */}
                <div className="tw-text-center tw-space-y-2">
                  <h2 className="tw-text-3xl tw-font-bold tw-bg-clip-text tw-text-transparent tw-bg-gradient-to-r tw-from-blue-600 tw-to-purple-600">
                    Create Account
                  </h2>
                  <p className="tw-text-gray-500">Sign up for a new account</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="tw-space-y-6 tw-rounded-md">
                  {/* Username Input */}
                  <div className="tw-z-11 tw-space-y-2">
                    <label className="tw-block tw-text-sm tw-font-medium tw-text-white">
                      Username
                    </label>
                    <div className="tw-relative tw-group">
                      <div className="tw-absolute tw-inset-y-0 tw-left-3 tw-flex tw-items-center tw-pl-3">
                        <User className="tw-h-5 tw-w-5 tw-text-white group-focus-within:tw-text-blue-500 tw-transition-colors" />
                      </div>
                      <div className="tw-relative tw-group tw-w-full">
                        <input
                          type="text"
                          placeholder="johndoe"
                          className="tw-w-full tw-text-white tw-box-border tw-pl-10 tw-pr-4 tw-py-3 tw-border tw-border-gray-200 tw-rounded-xl tw-bg-white/50 focus:tw-bg-white tw-shadow-sm focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500 tw-transition-all"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                        />
                      </div>

                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="tw-space-y-2">
                    <label className="tw-block tw-text-sm tw-font-medium tw-text-white">
                      Email
                    </label>
                    <div className="tw-relative tw-group ">
                      <div className="tw-absolute tw-inset-y-0 tw-left-3 tw-flex tw-items-center tw-pl-3">
                        <Mail className="tw-h-5 tw-w-5 tw-text-white group-focus-within:tw-text-blue-500 tw-transition-colors" />
                      </div>
                      <div className="tw-relative tw-group tw-w-full">
                        <input
                          type="email"
                          placeholder="you@example.com"
                          className="tw-w-full tw-box-border tw-pl-10 tw-pr-4 tw-py-3 tw-border tw-border-gray-200 tw-rounded-xl tw-bg-white/50 focus:tw-bg-white tw-shadow-sm focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500 tw-transition-all"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>

                    </div>
                  </div>

                  <div className="tw-space-y-2">
                    <label className="tw-block tw-text-sm tw-font-medium tw-text-white">
                      Password
                    </label>
                    <div className="tw-relative tw-group">
                      <div className="tw-absolute tw-inset-y-0 tw-left-3 tw-flex tw-items-center tw-pl-3">
                        <Lock className="tw-h-5 tw-w-5 tw-text-white group-focus-within:tw-text-blue-500 tw-transition-colors" />
                      </div>
                      <div className="tw-relative tw-group tw-w-full">
                        <input
                          type={showPassword ? 'text' : 'password'} // Toggle password visibility based on state
                          placeholder="••••••••"
                          className="tw-w-full tw-box-border tw-pl-10 tw-pr-4 tw-py-3 tw-border tw-border-gray-200 tw-rounded-xl tw-bg-white/50 focus:tw-bg-white tw-shadow-sm focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500 tw-transition-all"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <div
                          className="tw-absolute tw-inset-y-0 tw-right-3 tw-flex tw-items-center cursor-pointer"
                          onClick={togglePasswordVisibility} // Toggle password visibility on click
                        >
                          {showPassword ? (
                            <Eye className="tw-h-5 tw-w-5 tw-text-gray-600" />
                          ) : (
                            <EyeOff className="tw-h-5 tw-w-5 tw-text-gray-600" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tw-space-y-2">
                    <label className="tw-block tw-text-sm tw-font-medium tw-text-white">
                      Confirm Password
                    </label>
                    <div className="tw-relative tw-group">
                      <div className="tw-absolute tw-inset-y-0 tw-left-3 tw-flex tw-items-center tw-pl-3">
                        <Lock className="tw-h-5 tw-w-5 tw-text-white group-focus-within:tw-text-blue-500 tw-transition-colors" />
                      </div>
                      <div className="tw-relative tw-group tw-w-full">
                        <input
                          type={showConPassword ? 'text' : 'password'} // Toggle password visibility based on state
                          placeholder="••••••••"
                          className="tw-w-full tw-box-border tw-pl-10 tw-pr-4 tw-py-3 tw-border tw-border-gray-200 tw-rounded-xl tw-bg-white/50 focus:tw-bg-white tw-shadow-sm focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500 tw-transition-all"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                        />
                        <div
                          className="tw-absolute tw-inset-y-0 tw-right-3 tw-flex tw-items-center cursor-pointer"
                          onClick={toggleConPasswordVisibility} // Toggle password visibility on click
                        >
                          {showConPassword ? (
                            <Eye className="tw-h-5 tw-w-5 tw-text-gray-600" />
                          ) : (
                            <EyeOff className="tw-h-5 tw-w-5 tw-text-gray-600" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="tw-w-full tw-bg-gradient-to-r tw-from-blue-500 tw-to-blue-600 hover:tw-from-blue-600 hover:tw-to-blue-700 tw-text-white tw-px-6 tw-py-3 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-gap-2 tw-font-medium tw-shadow-lg hover:tw-shadow-xl tw-transform hover:tw-scale-[1.02] tw-transition-all"
                  >
                    Create Account
                    <ArrowRight className="tw-h-5 tw-w-5" />
                  </button>

                  {/* Sign in link */}
                  <div className="tw-text-center tw-text-sm tw-text-gray-600">
                    Already have an account?{' '}
                    <button
                      onClick={() => navigate('/login')}
                      className="tw-font-medium tw-text-blue-500 hover:tw-text-blue-600 tw-transition-colors"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;