import React from "react";

const DeepMPCProject = () => {
  const baseUrl = "/assets/projects/RLMPC/"
 const imageUrls =["dynamics_model_losses.png","rew_plot.png","value_model_history.png","inverted_pendulum.gif"]
  return (
    <div className="p-6 rounded-2xl shadow-md bg-gray-300/50 space-y-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800">
        Model-Based Deep Reinforcement Learning with Model Predictive Control
      </h1>

      <p className="text-gray-600">
        This project implements a DVPMC-style hybrid agent combining neural system dynamics, value approximation, and planning with the Cross-Entropy Method for model predictive control in continuous action environments.
      </p>

      <div className="space-y-2">
        <h2 className="font-semibold text-lg">🎯 Highlights</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Model Predictive Control (MPC) with neural dynamics model</li>
          <li>Cross-Entropy Method (CEM) for trajectory optimization</li>
          <li>Replay buffer for sample-efficient value function learning</li>
          <li>Trained on <code>InvertedPendulum-v5</code> from Mujoco</li>
        </ul>
      </div>
      <div>
        <img src={baseUrl+imageUrls[3]} alt="Environment: Inverted Pendulum " className="rounded-xl shadow" />

      </div>

      <div>
        <h2 className="font-semibold text-lg mb-1">🧠 Methodology</h2>
        <p className="text-gray-700">
          The system uses a learned dynamics model for state prediction and a value network for return estimation. At each step, CEM samples action sequences, plans ahead, and executes the first action. Temporal-Difference learning trains the value function, while the dynamics model minimizes MSE between predicted and real transitions.
        </p>
      </div>

      <div>
        <h2 className="font-semibold text-lg mb-1">📈 Results</h2>
        <p className="text-gray-700">
          The agent achieved full reward (1000) in <code>InvertedPendulum-v5</code> after ~1000 episodes. Dynamics and value models showed stable training curves.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
          <img src={baseUrl+imageUrls[1]} alt="Reward Plot" className="rounded-xl shadow" />
          <img src={baseUrl+imageUrls[0]} alt="Dynamics Model Loss" className="rounded-xl shadow" />
          <img src={baseUrl+imageUrls[2]} alt="Value Model History" className="rounded-xl shadow" />
        </div>
      </div>

      <div>
        <h2 className="font-semibold text-lg mb-1">⚠️ Challenges & 🔭 Future Work</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Struggled with sparse rewards due to long-horizon model compounding errors</li>
          <li>MPC planning overhead restricts real-time use in complex tasks</li>
          <li>Plans to explore iCEM/MPPI, learned reward functions, and more expressive model architectures</li>
        </ul>
      </div>

      <div className="space-y-2">
        <h2 className="font-semibold text-lg">📂 Resources</h2>
        <ul className="list-disc list-inside text-blue-600">
          <li>
            <a href="https://github.com/Aaronaferns/MBRL-DeepMPC" target="_blank" rel="noopener noreferrer">
              GitHub Repo
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default DeepMPCProject;
