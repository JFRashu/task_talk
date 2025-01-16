import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Lock, ArrowRight, User } from 'lucide-react';
import '../Registration/Registration.css'
import '../rashu-styles.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempted:', { username, password });
  };

  return (
    <div className="loginbody">
      <div className="tailwind-scope">
        <div className="tw-min-h-screen tw-flex tw-items-center tw-justify-center tw-p-4  tw-bg-transparent">
          <div className="tw-w-full tw-max-w-md">
            {/* Profile Icon Circle */}
            <div className="tw-flex tw-justify-center">
              <div className="tw-w-20 tw-h-20 tw-bg-white tw-rounded-full tw-flex tw-items-center tw-justify-center tw-shadow-lg tw-mb-2 tw-border-4 tw-border-blue-500">
                <User className="tw-w-10 tw-h-10 tw-text-blue-500" />
              </div>
            </div>

            {/* Main Card */}
            <div className="tw-bg-white/80 tw-backdrop-blur-sm tw-rounded-2xl tw-shadow-xl tw-border tw-border-white">
              <div className="tw-p-8 tw-space-y-7">
                {/* Header */}
                <div className="tw-text-center tw-space-y-2">
                  <h2 className="tw-text-3xl tw-font-bold tw-bg-clip-text tw-text-transparent tw-bg-gradient-to-r tw-from-blue-600 tw-to-purple-600">
                    Welcome Back
                  </h2>
                  <p className="tw-text-gray-500">Please sign in to your account</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="tw-space-y-6 tw-rounded-md">
                  <div className="tw-space-y-2">
                    <label className="tw-block tw-text-sm tw-font-medium tw-text-white">
                      Username
                    </label>
                    <div className="tw-relative tw-group">
                      <div className="tw-absolute tw-inset-y-0 tw-left-3 tw-flex tw-items-center tw-pl-3">
                        <User className="tw-h-5 tw-w-5  tw-text-white group-focus-within:tw-text-blue-500 tw-transition-colors" />
                      </div>
                      <div className="tw-relative tw-group tw-w-full">
                        <input
                          type="text"
                          placeholder="johndoe"
                          className="tw-w-full tw-box-border tw-pl-10 tw-pr-4 tw-py-3 tw-border tw-border-gray-200 tw-rounded-xl tw-bg-white/50 focus:tw-bg-white tw-shadow-sm focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500 tw-transition-all"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                        />
                      </div>

                    </div>
                  </div>
                  {/* Password Input */}
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


                  {/* Remember Me & Forgot Password
                <div className="tw-flex tw-items-center tw-justify-between">
                  <label className="tw-flex tw-items-center">
                    <input
                      type="checkbox"
                      className="tw-h-4 tw-w-4 tw-rounded tw-border-gray-300 tw-text-blue-500 focus:tw-ring-blue-500 tw-transition-colors"
                    />
                    <span className="tw-ml-2 tw-text-sm tw-text-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="tw-text-sm tw-font-medium tw-text-blue-500 hover:tw-text-blue-600 tw-transition-colors">
                    Forgot password?
                  </a>
                </div> */}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="tw-w-full tw-bg-gradient-to-r tw-from-blue-500 tw-to-blue-600 hover:tw-from-blue-600 hover:tw-to-blue-700 tw-text-white tw-px-6 tw-py-3 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-gap-2 tw-font-medium tw-shadow-lg hover:tw-shadow-xl tw-transform hover:tw-scale-[1.02] tw-transition-all"
                  >
                    Sign in
                    <ArrowRight className="tw-h-5 tw-w-5" />
                  </button>

                  {/* Sign up link */}
                  <div className="tw-text-center tw-text-sm tw-text-gray-600">
                    Don't have an account?{' '}
                    <a onClick={() => navigate('/registration')} className="tw-font-medium tw-text-blue-500  hover:tw-text-blue-600 tw-transition-colors tw-cursor-pointer">
                      Create an account
                    </a>
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

export default Login; 