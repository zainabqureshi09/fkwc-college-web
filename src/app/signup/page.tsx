"use client";

import { useState } from "react";
import { auth } from "../lib/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="p-8 bg-white/20 backdrop-blur-lg shadow-xl rounded-2xl max-w-md w-full"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Create Your Account 🚀
        </h2>

        <form onSubmit={handleSignup} className="flex flex-col">
          <input
            type="email"
            placeholder="Email Address"
            className="p-3 bg-white/50 border border-white rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-700 text-gray-900"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 bg-white/50 border border-white rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-700 text-gray-900"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold shadow-lg transition-all"
            type="submit"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </motion.button>
        </form>

        <p className="mt-4 text-center text-white">
          Already have an account?{" "}
          <Link href="/login" className="text-yellow-300 font-semibold hover:underline">
            Login here
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
