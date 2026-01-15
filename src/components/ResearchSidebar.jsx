

// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect, useRef } from "react";
// import { useTheme } from "../ThemeContext";

// // Modern scrollbar styles and research font
// const scrollbarStyles = `
//   .modern-scroll::-webkit-scrollbar {
//     width: 8px;
//   }
//   .modern-scroll::-webkit-scrollbar-track {
//     background: rgba(255, 255, 255, 0.03);
//     border-radius: 10px;
//   }
//   .modern-scroll::-webkit-scrollbar-thumb {
//     background: linear-gradient(180deg, rgba(196, 181, 253, 0.4), rgba(168, 85, 247, 0.6));
//     border-radius: 10px;
//     border: 1px solid rgba(255, 255, 255, 0.1);
//     transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//   }
//   .modern-scroll::-webkit-scrollbar-thumb:hover {
//     background: linear-gradient(180deg, rgba(196, 181, 253, 0.6), rgba(168, 85, 247, 0.8));
//     box-shadow: 0 0 8px rgba(196, 181, 253, 0.4);
//     transform: scaleY(1.1);
//   }
//   .modern-scroll {
//     scrollbar-width: thin;
//     scrollbar-color: rgba(196, 181, 253, 0.4) rgba(255, 255, 255, 0.03);
//   }

//   .research-font {
//     font-family: 'Times New Roman', 'Times', 'serif';
//     font-size: 1.125rem;
//     line-height: 1.75;
//   }

//   .research-theme-bg {
//     background-color: #D3D9D4;
//   }
// `;

// const ResearchSidebar = ({ isOpen, onClose }) => {
//   const { isBright } = useTheme();

//   const [activeTab, setActiveTab] = useState("notes");
//   const [isFullscreen, setIsFullscreen] = useState(false);

//   const [editingNote, setEditingNote] = useState(null);
//   const [editForm, setEditForm] = useState({
//     title: "",
//     content: "",
//     tags: "",
//     images: [],
//   });

//   const [isFullPageMode, setIsFullPageMode] = useState(false);
//   const [selectedNote, setSelectedNote] = useState(null);
//   const [editMode, setEditMode] = useState(false);

//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [showAuthModal, setShowAuthModal] = useState(false);
//   const [authPassword, setAuthPassword] = useState("");
//   const [pendingEditAction, setPendingEditAction] = useState(null);

//   // Add/Edit modal for articles/papers/links
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [editingItem, setEditingItem] = useState(null); // { tab, id }
//   const [itemForm, setItemForm] = useState({});

//   const fileInputRef = useRef(null);

//   // Blur rules:
//   // - When sidebar is open: blur everything except sidebar.
//   // - When viewing/creating/editing notes or auth modal: NO blur.
//   // - When add/edit item modal is open: NO blur (modal handles its own backdrop).
//   const shouldShowSidebarBackdrop =
//     isOpen && !isFullPageMode && !showAuthModal && !showAddForm;

//   const tabs = [
//     { id: "notes", label: "Notes", icon: "📝" },
//     { id: "articles", label: "Articles", icon: "📄" },
//     { id: "papers", label: "Papers", icon: "📚" },
//     { id: "links", label: "Links", icon: "🔗" },
//   ];

//   const groupBySections = (items) => {
//     return items.reduce((acc, item) => {
//       const section = item.section || "Uncategorized";
//       if (!acc[section]) acc[section] = [];
//       acc[section].push(item);
//       return acc;
//     }, {});
//   };

//   const defaultFormByTab = (tab) => {
//     if (tab === "articles") {
//       return {
//         title: "",
//         author: "",
//         link: "",
//         summary: "",
//         date: new Date().toISOString().split("T")[0],
//         section: "",
//       };
//     }
//     if (tab === "papers") {
//       return {
//         title: "",
//         authors: "",
//         link: "",
//         summary: "",
//         venue: "",
//         pdf: "",
//         section: "",
//       };
//     }
//     if (tab === "links") {
//       return { title: "", url: "", category: "", description: "" };
//     }
//     return {};
//   };

//   // Load content from localStorage or use defaults
//   const [researchContent, setResearchContent] = useState(() => {
//     const saved = localStorage.getItem("researchContent");
//     if (saved) return JSON.parse(saved);

//     return {
//       notes: [
//         {
//           id: 1,
//           title: "Diffusion Models Deep Dive",
//           content:
//             "Key insights on denoising diffusion probabilistic models and their applications in generative AI. The core idea is to learn a Markov chain that gradually adds noise to data and then learns to reverse this process. This allows for high-quality image generation without the mode collapse issues of GANs.\n\nKey takeaways:\n- Forward process: Gradually add noise over T timesteps\n- Reverse process: Learn to denoise step by step\n- Training objective: Simplified to predict noise at each timestep\n- Applications: Image generation, inpainting, super-resolution",
//           date: "2024-01-15",
//           tags: ["Diffusion", "Generative AI"],
//           images: [],
//         },
//         {
//           id: 2,
//           title: "Reinforcement Learning Fundamentals",
//           content:
//             "Core concepts of Markov Decision Processes, value functions, and policy gradients. RL is fundamentally about learning to make decisions through interaction with an environment to maximize cumulative reward.\n\nMDP Components:\n- States (S): Environment configurations\n- Actions (A): Available choices\n- Rewards (R): Feedback signals\n- Transitions (P): Environment dynamics\n\nValue Functions:\n- State Value (V): Expected return from state\n- Action Value (Q): Expected return from state-action pair\n- Bellman Equations: Recursive relationships",
//           date: "2024-01-10",
//           tags: ["RL", "MDP"],
//           images: [],
//         },
//       ],
//       articles: [
//         {
//           id: 1,
//           title: "Understanding Transformer Architecture",
//           author: "Aaron Fernandes",
//           link: "#",
//           summary:
//             "A comprehensive guide to the transformer architecture and its variants.",
//           date: "2024-01-20",
//           section: "Machine Learning",
//         },
//         {
//           id: 2,
//           title: "Modern Web Development Trends",
//           author: "Tech Review",
//           link: "#",
//           summary:
//             "Latest trends in frontend development including React, Vue, and modern tooling.",
//           date: "2024-01-18",
//           section: "Web Development",
//         },
//         {
//           id: 3,
//           title: "The Future of AI Research",
//           author: "AI Today",
//           link: "#",
//           summary:
//             "Exploring upcoming directions in artificial intelligence and machine learning.",
//           date: "2024-01-15",
//           section: "AI Research",
//         },
//       ],
//       papers: [
//         {
//           id: 1,
//           title: "Attention Is All You Need",
//           authors: "Vaswani et al.",
//           link: "https://arxiv.org/abs/1706.03762",
//           summary: "The original transformer paper that revolutionized NLP.",
//           venue: "NeurIPS 2017",
//           pdf: "#",
//           section: "Natural Language Processing",
//         },
//         {
//           id: 2,
//           title: "Denoising Diffusion Probabilistic Models",
//           authors: "Ho et al.",
//           link: "https://arxiv.org/abs/2006.11239",
//           summary: "Groundbreaking work on diffusion models for image generation.",
//           venue: "NeurIPS 2020",
//           pdf: "#",
//           section: "Generative Models",
//         },
//         {
//           id: 3,
//           title: "Deep Reinforcement Learning",
//           authors: "Mnih et al.",
//           link: "https://arxiv.org/abs/1312.5602",
//           summary: "Human-level control through deep reinforcement learning.",
//           venue: "Nature 2015",
//           pdf: "#",
//           section: "Reinforcement Learning",
//         },
//         {
//           id: 4,
//           title: "BERT: Pre-training of Deep Bidirectional Transformers",
//           authors: "Devlin et al.",
//           link: "https://arxiv.org/abs/1810.04805",
//           summary:
//             "Pre-training deep bidirectional transformers for language understanding.",
//           venue: "NAACL 2019",
//           pdf: "#",
//           section: "Natural Language Processing",
//         },
//       ],
//       links: [
//         {
//           id: 1,
//           title: "PyTorch Official Documentation",
//           url: "https://pytorch.org/docs/",
//           category: "Framework",
//           description: "Official PyTorch documentation and tutorials.",
//         },
//         {
//           id: 2,
//           title: "Hugging Face Models",
//           url: "https://huggingface.co/models",
//           category: "AI Models",
//           description: "Open-source AI models and datasets.",
//         },
//       ],
//     };
//   });

//   // Save to localStorage whenever content changes
//   useEffect(() => {
//     localStorage.setItem("researchContent", JSON.stringify(researchContent));
//   }, [researchContent]);

//   // Prevent background scroll when sidebar blur overlay is active
//   useEffect(() => {
//     if (shouldShowSidebarBackdrop) {
//       const prev = document.body.style.overflow;
//       document.body.style.overflow = "hidden";
//       return () => {
//         document.body.style.overflow = prev;
//       };
//     }
//   }, [shouldShowSidebarBackdrop]);

//   // Handle clipboard paste for images (edit mode only)
//   useEffect(() => {
//     const handlePaste = (e) => {
//       if (!editMode) return;

//       const items = e.clipboardData?.items;
//       if (!items) return;

//       for (let i = 0; i < items.length; i++) {
//         const item = items[i];
//         if (item.type.indexOf("image") !== -1) {
//           e.preventDefault();
//           const blob = item.getAsFile();
//           const imageUrl = URL.createObjectURL(blob);
//           setEditForm((prev) => ({
//             ...prev,
//             images: [...prev.images, imageUrl],
//           }));
//         }
//       }
//     };

//     if (editMode) document.addEventListener("paste", handlePaste);
//     return () => document.removeEventListener("paste", handlePaste);
//   }, [editMode]);

//   // ---- Auth ----
//   const requireAuth = (action) => {
//     if (isAuthenticated) {
//       action();
//     } else {
//       setPendingEditAction(() => action);
//       setShowAuthModal(true);
//     }
//   };

//   const handleAuth = () => {
//     const correctPassword = import.meta.env.VITE_EDIT_PASSWORD || "admin123";
//     if (authPassword === correctPassword) {
//       setIsAuthenticated(true);
//       setShowAuthModal(false);
//       setAuthPassword("");
//       if (pendingEditAction) {
//         pendingEditAction();
//         setPendingEditAction(null);
//       }
//       alert("✅ Authentication successful! You can now edit content.");
//     } else {
//       alert("❌ Incorrect password.");
//       setAuthPassword("");
//     }
//   };

//   // ---- Notes full-page ----
//   const openNoteView = (note) => {
//     setSelectedNote(note);
//     setIsFullPageMode(true);
//     setEditMode(false);
//     setEditingNote(null);
//   };

//   const closeNoteView = () => {
//     setSelectedNote(null);
//     setIsFullPageMode(false);
//     setEditMode(false);
//     setEditingNote(null);
//     setEditForm({ title: "", content: "", tags: "", images: [] });
//   };

//   const handleImageUpload = (event) => {
//     const files = Array.from(event.target.files || []);
//     const imageUrls = files.map((file) => URL.createObjectURL(file));
//     setEditForm((prev) => ({
//       ...prev,
//       images: [...prev.images, ...imageUrls],
//     }));
//   };

//   const startEditingNote = () => {
//     requireAuth(() => {
//       if (selectedNote) {
//         setEditingNote(selectedNote.id);
//         setEditForm({
//           title: selectedNote.title,
//           content: selectedNote.content,
//           tags: (selectedNote.tags || []).join(", "),
//           images: selectedNote.images || [],
//         });
//       } else {
//         setEditingNote(null);
//         setEditForm({ title: "", content: "", tags: "", images: [] });
//       }
//       setEditMode(true);
//     });
//   };

//   const saveNote = () => {
//     if (!editForm.title.trim()) return alert("Please enter a title for the note.");
//     if (!editForm.content.trim()) return alert("Please enter some content for the note.");

//     const tags = editForm.tags
//       .split(",")
//       .map((t) => t.trim())
//       .filter(Boolean);

//     if (editingNote) {
//       setResearchContent((prev) => ({
//         ...prev,
//         notes: prev.notes.map((note) =>
//           note.id === editingNote
//             ? { ...note, title: editForm.title, content: editForm.content, tags, images: editForm.images }
//             : note
//         ),
//       }));

//       setSelectedNote((prev) =>
//         prev
//           ? { ...prev, title: editForm.title, content: editForm.content, tags, images: editForm.images }
//           : null
//       );

//       setEditMode(false);
//       setEditingNote(null);
//       setEditForm({ title: "", content: "", tags: "", images: [] });
//       return;
//     }

//     // new note
//     const newNote = {
//       id: Date.now(),
//       title: editForm.title,
//       content: editForm.content,
//       date: new Date().toISOString().split("T")[0],
//       tags,
//       images: editForm.images,
//     };

//     setResearchContent((prev) => ({
//       ...prev,
//       notes: [newNote, ...prev.notes],
//     }));

//     // go back to list
//     setIsFullPageMode(false);
//     setSelectedNote(null);
//     setEditMode(false);
//     setEditingNote(null);
//     setEditForm({ title: "", content: "", tags: "", images: [] });
//   };

//   const deleteNote = (noteId) => {
//     setResearchContent((prev) => ({
//       ...prev,
//       notes: prev.notes.filter((note) => note.id !== noteId),
//     }));
//   };

//   // ---- Add/Edit items (articles/papers/links) ----
//   const openAddModal = (tab) => {
//     requireAuth(() => {
//       setEditingItem({ tab, id: null });
//       setItemForm(defaultFormByTab(tab));
//       setShowAddForm(true);
//     });
//   };

//   const openEditModal = (tab, item) => {
//     requireAuth(() => {
//       setEditingItem({ tab, id: item.id });
//       setItemForm({ ...item });
//       setShowAddForm(true);
//     });
//   };

//   const closeItemModal = () => {
//     setShowAddForm(false);
//     setEditingItem(null);
//     setItemForm({});
//   };

//   const deleteItem = (tab, id) => {
//     requireAuth(() => {
//       setResearchContent((prev) => ({
//         ...prev,
//         [tab]: (prev[tab] || []).filter((x) => x.id !== id),
//       }));
//     });
//   };

//   const saveItem = () => {
//     if (!editingItem?.tab) return;

//     const tab = editingItem.tab;

//     const mustHave = (k) => typeof itemForm[k] === "string" && itemForm[k].trim().length > 0;
//     if (!mustHave("title")) return alert("Title is required.");

//     if (tab === "articles") {
//       if (!mustHave("author")) return alert("Author is required.");
//       if (!mustHave("summary")) return alert("Summary is required.");
//     }
//     if (tab === "papers") {
//       if (!mustHave("authors")) return alert("Authors is required.");
//       if (!mustHave("summary")) return alert("Summary is required.");
//     }
//     if (tab === "links") {
//       if (!mustHave("url")) return alert("URL is required.");
//     }

//     setResearchContent((prev) => {
//       const list = prev[tab] || [];
//       if (editingItem.id) {
//         return {
//           ...prev,
//           [tab]: list.map((x) => (x.id === editingItem.id ? { ...x, ...itemForm, id: editingItem.id } : x)),
//         };
//       }
//       const newItem = { ...itemForm, id: Date.now() };
//       return { ...prev, [tab]: [newItem, ...list] };
//     });

//     closeItemModal();
//   };

//   const renderTabContent = () => {
//     const content = researchContent[activeTab] || [];

//     switch (activeTab) {
//       case "notes":
//         return (
//           <div className="space-y-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <h2 className="text-2xl font-bold text-[#212A31]">Research Notes</h2>
//                 <p className="text-sm mt-1 text-gray-600 opacity-70">
//                   {content.length} {content.length === 1 ? "note" : "notes"}
//                 </p>
//               </div>

//               <motion.button
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 onClick={() =>
//                   requireAuth(() => {
//                     setSelectedNote({
//                       id: null,
//                       title: "",
//                       content: "",
//                       date: new Date().toISOString().split("T")[0],
//                       tags: [],
//                       images: [],
//                     });
//                     setEditingNote(null);
//                     setEditForm({ title: "", content: "", tags: "", images: [] });
//                     setIsFullPageMode(true);
//                     setEditMode(true);
//                   })
//                 }
//                 className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 bg-[#212A31] text-white hover:bg-[#2E3944] hover:scale-105 shadow-lg"
//               >
//                 ✏️ New Note
//               </motion.button>
//             </div>

//             <div className="space-y-6">
//               {content.map((note, index) => (
//                 <motion.article
//                   key={note.id}
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.05, duration: 0.6 }}
//                   className="group cursor-pointer transition-all duration-300 hover:scale-[1.02] bg-white/60 hover:bg-white/80 border-gray-300 border rounded-xl p-6 backdrop-blur-sm"
//                   onClick={() => openNoteView(note)}
//                 >
//                   <div className="flex justify-between items-start mb-4">
//                     <div className="flex-1">
//                       <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors text-[#212A31]">
//                         {note.title}
//                       </h3>
//                       <div className="flex items-center gap-3 text-sm">
//                         <time className="text-gray-600 opacity-70">{note.date}</time>
//                         <span className="text-gray-600 opacity-40">•</span>
//                         <span className="text-gray-600 opacity-70">Research Note</span>
//                       </div>
//                     </div>

//                     <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           openNoteView(note);
//                         }}
//                         className={`p-2 rounded-lg text-sm transition-colors ${
//                           isBright ? "hover:bg-gray-200 text-gray-600" : "hover:bg-gray-700 text-gray-400"
//                         }`}
//                         title="Read Note"
//                       >
//                         →
//                       </button>

//                       {isAuthenticated && (
//                         <>
//                           <button
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               openNoteView(note);
//                               startEditingNote();
//                             }}
//                             className={`p-2 rounded-lg text-sm transition-colors ${
//                               isBright ? "hover:bg-gray-200 text-gray-600" : "hover:bg-gray-700 text-gray-400"
//                             }`}
//                             title="Edit Note"
//                           >
//                             ✏️
//                           </button>

//                           <button
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               if (confirm("Are you sure you want to delete this note?")) deleteNote(note.id);
//                             }}
//                             className={`p-2 rounded-lg text-sm transition-colors ${
//                               isBright ? "hover:bg-red-100 text-red-600" : "hover:bg-red-900/50 text-red-400"
//                             }`}
//                             title="Delete Note"
//                           >
//                             🗑️
//                           </button>
//                         </>
//                       )}
//                     </div>
//                   </div>

//                   <div
//                     className="research-font mb-4 overflow-hidden text-[#212A31] opacity-80"
//                     style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}
//                   >
//                     {note.content}
//                   </div>

//                   <div className="flex gap-2 flex-wrap">
//                     {(note.tags || []).map((tag, tagIndex) => (
//                       <span
//                         key={tagIndex}
//                         className="px-3 py-1 text-xs rounded-full font-medium transition-colors bg-[#748D92] text-[#212A31] hover:bg-[#D3D9D4]"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

//                   {note.images && note.images.length > 0 && (
//                     <div className="mt-4 flex items-center gap-2">
//                       <div className="flex -space-x-2">
//                         {note.images.slice(0, 3).map((image, imgIndex) => (
//                           <div key={imgIndex} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
//                             <img src={image} alt="" className="w-full h-full object-cover" />
//                           </div>
//                         ))}
//                       </div>
//                       {note.images.length > 3 && (
//                         <span className="text-xs text-[#748D92] opacity-60">+{note.images.length - 3} more</span>
//                       )}
//                     </div>
//                   )}
//                 </motion.article>
//               ))}
//             </div>
//           </div>
//         );

//       case "articles": {
//         const articlesBySection = groupBySections(content);
//         return (
//           <div className="space-y-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <h2 className="text-2xl font-bold text-[#212A31]">Research Articles</h2>
//                 <p className="text-sm mt-1 text-[#748D92] opacity-70">
//                   {content.length} articles across {Object.keys(articlesBySection).length} categories
//                 </p>
//               </div>

//               <motion.button
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 onClick={() => openAddModal("articles")}
//                 className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 bg-[#212A31] text-white hover:bg-[#2E3944] hover:scale-105 shadow-lg"
//               >
//                 ➕ New Article
//               </motion.button>
//             </div>

//             {Object.entries(articlesBySection).map(([sectionName, articles]) => (
//               <div key={sectionName} className="space-y-3">
//                 <div className="flex items-center gap-3">
//                   <h3 className="text-lg font-semibold text-[#212A31]">{sectionName}</h3>
//                   <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">{articles.length}</span>
//                 </div>

//                 <div className="space-y-3 ml-4">
//                   {articles.map((article, index) => (
//                     <motion.article
//                       key={article.id}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.05 }}
//                       className="group p-4 rounded-lg border transition-all duration-300 bg-white/60 border-gray-300 hover:bg-white/80 hover:shadow-md"
//                     >
//                       <div className="flex justify-between items-start mb-2">
//                         <h4 className="font-semibold text-[#212A31] hover:text-blue-600 transition-colors cursor-pointer">
//                           {article.title}
//                         </h4>

//                         {isAuthenticated && (
//                           <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
//                             <button
//                               onClick={() => openEditModal("articles", article)}
//                               className={`p-1 rounded text-xs ${
//                                 isBright ? "hover:bg-gray-200 text-gray-600" : "hover:bg-gray-700 text-gray-400"
//                               }`}
//                             >
//                               ✏️
//                             </button>
//                             <button
//                               onClick={() => {
//                                 if (confirm("Delete this article?")) deleteItem("articles", article.id);
//                               }}
//                               className={`p-1 rounded text-xs ${
//                                 isBright ? "hover:bg-red-100 text-red-600" : "hover:bg-red-900/50 text-red-400"
//                               }`}
//                             >
//                               🗑️
//                             </button>
//                           </div>
//                         )}
//                       </div>

//                       <div className="flex items-center gap-2 mb-2">
//                         <p className="text-xs text-gray-600 opacity-70">By {article.author}</p>
//                         <span className="text-gray-600 opacity-40">•</span>
//                         <span className="text-xs text-gray-600 opacity-70">{article.date}</span>
//                       </div>

//                       <p className="research-font mb-3 text-[#212A31]">{article.summary}</p>

//                       <a
//                         href={article.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className={`inline-flex items-center gap-1 text-sm font-medium transition-colors ${
//                           isBright ? "text-blue-600 hover:text-blue-800" : "text-blue-400 hover:text-blue-300"
//                         }`}
//                       >
//                         Read Article →
//                       </a>
//                     </motion.article>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         );
//       }

//       case "papers": {
//         const papersBySection = groupBySections(content);
//         return (
//           <div className="space-y-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <h2 className="text-2xl font-bold text-[#212A31]">Research Papers</h2>
//                 <p className="text-sm mt-1 text-gray-600 opacity-70">
//                   {content.length} papers across {Object.keys(papersBySection).length} categories
//                 </p>
//               </div>

//               <motion.button
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 onClick={() => openAddModal("papers")}
//                 className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 bg-[#212A31] text-white hover:bg-[#2E3944] hover:scale-105 shadow-lg"
//               >
//                 ➕ New Paper
//               </motion.button>
//             </div>

//             {Object.entries(papersBySection).map(([sectionName, papers]) => (
//               <div key={sectionName} className="space-y-3">
//                 <div className="flex items-center gap-3">
//                   <h3 className="text-lg font-semibold text-[#212A31]">{sectionName}</h3>
//                   <span className="px-2 py-1 text-xs rounded-full bg-[#124E66] text-white">{papers.length}</span>
//                 </div>

//                 <div className="space-y-3 ml-4">
//                   {papers.map((paper, index) => (
//                     <motion.article
//                       key={paper.id}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.05 }}
//                       className="group p-4 rounded-lg border transition-all duration-300 bg-white/60 border-gray-300 hover:bg-white/80 hover:shadow-md"
//                     >
//                       <div className="flex justify-between items-start mb-2">
//                         <h4 className="font-semibold text-[#212A31] hover:text-blue-600 transition-colors cursor-pointer">
//                           {paper.title}
//                         </h4>

//                         {isAuthenticated && (
//                           <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
//                             <button
//                               onClick={() => openEditModal("papers", paper)}
//                               className={`p-1 rounded text-xs ${
//                                 isBright ? "hover:bg-gray-200 text-gray-600" : "hover:bg-gray-700 text-gray-400"
//                               }`}
//                             >
//                               ✏️
//                             </button>
//                             <button
//                               onClick={() => {
//                                 if (confirm("Delete this paper?")) deleteItem("papers", paper.id);
//                               }}
//                               className={`p-1 rounded text-xs ${
//                                 isBright ? "hover:bg-red-100 text-red-600" : "hover:bg-red-900/50 text-red-400"
//                               }`}
//                             >
//                               🗑️
//                             </button>
//                           </div>
//                         )}
//                       </div>

//                       <div className="flex items-center gap-2 mb-2">
//                         <p className="text-xs text-gray-600 opacity-70">{paper.authors}</p>
//                         <span className="text-gray-600 opacity-40">•</span>
//                         <span className="text-xs text-gray-600 opacity-70">{paper.venue}</span>
//                       </div>

//                       <p className="research-font mb-4 text-[#212A31]">{paper.summary}</p>

//                       <div className="flex gap-2">
//                         <a
//                           href={paper.link}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className={`px-3 py-1 text-xs rounded font-medium transition-colors ${
//                             isBright
//                               ? "bg-blue-100 text-blue-700 hover:bg-blue-200"
//                               : "bg-blue-900/50 text-blue-300 hover:bg-blue-800"
//                           }`}
//                         >
//                           ArXiv
//                         </a>
//                         <a
//                           href={paper.pdf}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className={`px-3 py-1 text-xs rounded font-medium transition-colors ${
//                             isBright
//                               ? "bg-green-100 text-green-700 hover:bg-green-200"
//                               : "bg-green-900/50 text-green-300 hover:bg-green-800"
//                           }`}
//                         >
//                           PDF
//                         </a>
//                       </div>
//                     </motion.article>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         );
//       }

//       case "links":
//         return (
//           <div className="space-y-4">
//             <motion.button
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               onClick={() => openAddModal("links")}
//               className={`w-full p-4 rounded-lg border-2 border-dashed ${
//                 isBright
//                   ? "border-gray-300 text-gray-600 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50/50"
//                   : "border-gray-600 text-gray-400 hover:border-blue-400 hover:text-blue-400 hover:bg-blue-900/20"
//               } transition-all duration-300`}
//             >
//               ➕ Add New Link
//             </motion.button>

//             {content.map((link, index) => (
//               <motion.div
//                 key={link.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className={`p-4 rounded-lg border ${
//                   isBright
//                     ? "bg-white/50 border-gray-200 hover:bg-white/70"
//                     : "bg-gray-800/50 border-gray-700 hover:bg-gray-700/70"
//                 } transition-all duration-300`}
//               >
//                 <div className="flex justify-between items-start mb-2">
//                   <h4 className="font-semibold text-[#212A31]">{link.title}</h4>

//                   {isAuthenticated && (
//                     <div className="flex gap-1">
//                       <button
//                         onClick={() => openEditModal("links", link)}
//                         className="p-1 rounded text-xs hover:bg-gray-200 text-gray-600"
//                       >
//                         ✏️
//                       </button>
//                       <button
//                         onClick={() => {
//                           if (confirm("Delete this link?")) deleteItem("links", link.id);
//                         }}
//                         className="p-1 rounded text-xs hover:bg-red-100 text-red-600"
//                       >
//                         🗑️
//                       </button>
//                     </div>
//                   )}
//                 </div>

//                 <span className="inline-block px-2 py-1 text-xs rounded-full mb-2 bg-purple-100 text-purple-700">
//                   {link.category}
//                 </span>

//                 <p className="text-sm mb-3 text-[#748D92]">{link.description}</p>
//                 <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800">
//                   Visit Link →
//                 </a>
//               </motion.div>
//             ))}
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       <style dangerouslySetInnerHTML={{ __html: scrollbarStyles }} />

//       {/* Sidebar */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ type: "spring", damping: 30, stiffness: 300 }}
//             className={`fixed top-0 right-0 h-full flex flex-col research-theme-bg ${
//               isFullscreen ? "w-full z-[100]" : "w-96 z-[90]"
//             } border-l border-gray-300 shadow-2xl`}
//           >
//             {/* Header */}
//             <div className="flex items-center justify-between p-6 border-b border-gray-300">
//               <div>
//                 <h2 className="text-xl font-bold text-[#212A31]">Research & Notes</h2>
//                 <p className="text-xs mt-1 text-gray-600 opacity-70">Full-page reading experience</p>
//               </div>
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={() => setIsFullscreen(!isFullscreen)}
//                   className={`p-2 rounded-lg transition-colors ${
//                     isBright ? "hover:bg-gray-100 text-gray-600" : "hover:bg-gray-800 text-gray-400"
//                   }`}
//                   title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
//                 >
//                   {isFullscreen ? "🗗" : "⛶"}
//                 </button>
//                 <button onClick={onClose} className="p-2 rounded-lg transition-colors hover:bg-gray-200 text-gray-600">
//                   ✕
//                 </button>
//               </div>
//             </div>

//             {/* Tabs */}
//             <div className="flex border-b border-gray-300">
//               {tabs.map((tab) => (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`flex-1 py-3 px-4 text-center transition-colors text-[#212A31] ${
//                     activeTab === tab.id
//                       ? "bg-[#D3D9D4] text-[#212A31] border-b-2 border-[#212A31]"
//                       : "text-gray-600 hover:bg-gray-100"
//                   }`}
//                 >
//                   <span className="text-lg mb-1 block">{tab.icon}</span>
//                   <span className="text-xs font-medium">{tab.label}</span>
//                 </button>
//               ))}
//             </div>

//             {/* Content */}
//             <div className="flex-1 overflow-y-auto p-6 modern-scroll">{renderTabContent()}</div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Sidebar Backdrop (blur ON only when sidebar is open AND not in full-page/auth/add-edit modals) */}
//       <AnimatePresence>
//         {shouldShowSidebarBackdrop && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//             className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[80]"
//           />
//         )}
//       </AnimatePresence>

//       {/* Authentication Modal */}
//       <AnimatePresence>
//         {showAuthModal && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[130] flex items-center justify-center p-4"
//           >
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setShowAuthModal(false)}
//               className="absolute inset-0 bg-black/70 backdrop-blur-sm"
//             />

//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               className={`relative w-full max-w-md p-6 rounded-2xl shadow-2xl ${
//                 isBright ? "bg-white border border-gray-200" : "bg-gray-900 border border-gray-700"
//               }`}
//             >
//               <h3 className="text-xl font-bold mb-4 text-center text-[#212A31]">🔐 Authentication Required</h3>

//               <p className="text-sm mb-6 text-center text-gray-600">
//                 Enter the password to access edit mode for the research notes.
//               </p>

//               <div className="space-y-4">
//                 <input
//                   type="password"
//                   placeholder="Enter password"
//                   value={authPassword}
//                   onChange={(e) => setAuthPassword(e.target.value)}
//                   onKeyDown={(e) => e.key === "Enter" && handleAuth()}
//                   className={`w-full p-3 rounded-lg border ${
//                     isBright
//                       ? "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
//                       : "bg-gray-700 border-gray-600 text-white focus:border-blue-500"
//                   } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
//                 />

//                 <div className="flex gap-3">
//                   <button
//                     onClick={handleAuth}
//                     className="flex-1 px-4 py-2 rounded-lg text-sm font-medium bg-[#212A31] text-white hover:bg-[#2E3944] transition-colors"
//                   >
//                     Authenticate
//                   </button>
//                   <button
//                     onClick={() => {
//                       setShowAuthModal(false);
//                       setAuthPassword("");
//                     }}
//                     className={`px-4 py-2 rounded-lg text-sm font-medium ${
//                       isBright ? "bg-gray-300 text-gray-700 hover:bg-gray-400" : "bg-gray-600 text-gray-300 hover:bg-gray-500"
//                     } transition-colors`}
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Add/Edit Modal for Articles / Papers / Links */}
//       <AnimatePresence>
//         {showAddForm && editingItem?.tab && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[140] flex items-center justify-center p-4"
//           >
//             <div onClick={closeItemModal} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

//             <motion.div
//               initial={{ scale: 0.96, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.96, opacity: 0 }}
//               className="relative w-full max-w-2xl rounded-2xl shadow-2xl border border-gray-200 bg-white p-6"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex items-start justify-between mb-4">
//                 <div>
//                   <h3 className="text-xl font-bold text-[#212A31]">
//                     {editingItem.id ? "Edit" : "Add"}{" "}
//                     {editingItem.tab === "articles" ? "Article" : editingItem.tab === "papers" ? "Paper" : "Link"}
//                   </h3>
//                   <p className="text-sm text-gray-600 opacity-80">Saves to localStorage (same as your notes).</p>
//                 </div>

//                 <button onClick={closeItemModal} className="p-2 rounded-lg hover:bg-gray-100 text-gray-600">
//                   ✕
//                 </button>
//               </div>

//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium mb-1 text-[#212A31]">Title</label>
//                   <input
//                     value={itemForm.title || ""}
//                     onChange={(e) => setItemForm((p) => ({ ...p, title: e.target.value }))}
//                     className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
//                     placeholder="Title..."
//                   />
//                 </div>

//                 {editingItem.tab === "articles" && (
//                   <>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium mb-1 text-[#212A31]">Author</label>
//                         <input
//                           value={itemForm.author || ""}
//                           onChange={(e) => setItemForm((p) => ({ ...p, author: e.target.value }))}
//                           className="w-full p-3 rounded-lg border border-gray-300"
//                           placeholder="Author..."
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium mb-1 text-[#212A31]">Date</label>
//                         <input
//                           value={itemForm.date || ""}
//                           onChange={(e) => setItemForm((p) => ({ ...p, date: e.target.value }))}
//                           className="w-full p-3 rounded-lg border border-gray-300"
//                           placeholder="YYYY-MM-DD"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium mb-1 text-[#212A31]">Section</label>
//                       <input
//                         value={itemForm.section || ""}
//                         onChange={(e) => setItemForm((p) => ({ ...p, section: e.target.value }))}
//                         className="w-full p-3 rounded-lg border border-gray-300"
//                         placeholder="Machine Learning..."
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium mb-1 text-[#212A31]">Link</label>
//                       <input
//                         value={itemForm.link || ""}
//                         onChange={(e) => setItemForm((p) => ({ ...p, link: e.target.value }))}
//                         className="w-full p-3 rounded-lg border border-gray-300"
//                         placeholder="https://..."
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium mb-1 text-[#212A31]">Summary</label>
//                       <textarea
//                         value={itemForm.summary || ""}
//                         onChange={(e) => setItemForm((p) => ({ ...p, summary: e.target.value }))}
//                         rows={5}
//                         className="w-full p-3 rounded-lg border border-gray-300"
//                         placeholder="Short summary..."
//                       />
//                     </div>
//                   </>
//                 )}

//                 {editingItem.tab === "papers" && (
//                   <>
//                     <div>
//                       <label className="block text-sm font-medium mb-1 text-[#212A31]">Authors</label>
//                       <input
//                         value={itemForm.authors || ""}
//                         onChange={(e) => setItemForm((p) => ({ ...p, authors: e.target.value }))}
//                         className="w-full p-3 rounded-lg border border-gray-300"
//                         placeholder="Ho et al."
//                       />
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium mb-1 text-[#212A31]">Venue</label>
//                         <input
//                           value={itemForm.venue || ""}
//                           onChange={(e) => setItemForm((p) => ({ ...p, venue: e.target.value }))}
//                           className="w-full p-3 rounded-lg border border-gray-300"
//                           placeholder="NeurIPS 2020"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium mb-1 text-[#212A31]">Section</label>
//                         <input
//                           value={itemForm.section || ""}
//                           onChange={(e) => setItemForm((p) => ({ ...p, section: e.target.value }))}
//                           className="w-full p-3 rounded-lg border border-gray-300"
//                           placeholder="Generative Models"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium mb-1 text-[#212A31]">ArXiv Link</label>
//                       <input
//                         value={itemForm.link || ""}
//                         onChange={(e) => setItemForm((p) => ({ ...p, link: e.target.value }))}
//                         className="w-full p-3 rounded-lg border border-gray-300"
//                         placeholder="https://arxiv.org/abs/..."
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium mb-1 text-[#212A31]">PDF Link</label>
//                       <input
//                         value={itemForm.pdf || ""}
//                         onChange={(e) => setItemForm((p) => ({ ...p, pdf: e.target.value }))}
//                         className="w-full p-3 rounded-lg border border-gray-300"
//                         placeholder="https://..."
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium mb-1 text-[#212A31]">Summary</label>
//                       <textarea
//                         value={itemForm.summary || ""}
//                         onChange={(e) => setItemForm((p) => ({ ...p, summary: e.target.value }))}
//                         rows={5}
//                         className="w-full p-3 rounded-lg border border-gray-300"
//                         placeholder="Short summary..."
//                       />
//                     </div>
//                   </>
//                 )}

//                 {editingItem.tab === "links" && (
//                   <>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium mb-1 text-[#212A31]">Category</label>
//                         <input
//                           value={itemForm.category || ""}
//                           onChange={(e) => setItemForm((p) => ({ ...p, category: e.target.value }))}
//                           className="w-full p-3 rounded-lg border border-gray-300"
//                           placeholder="Framework..."
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium mb-1 text-[#212A31]">URL</label>
//                         <input
//                           value={itemForm.url || ""}
//                           onChange={(e) => setItemForm((p) => ({ ...p, url: e.target.value }))}
//                           className="w-full p-3 rounded-lg border border-gray-300"
//                           placeholder="https://..."
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium mb-1 text-[#212A31]">Description</label>
//                       <textarea
//                         value={itemForm.description || ""}
//                         onChange={(e) => setItemForm((p) => ({ ...p, description: e.target.value }))}
//                         rows={4}
//                         className="w-full p-3 rounded-lg border border-gray-300"
//                         placeholder="What is this link?"
//                       />
//                     </div>
//                   </>
//                 )}
//               </div>

//               <div className="flex justify-end gap-3 mt-6">
//                 <button onClick={closeItemModal} className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300">
//                   Cancel
//                 </button>
//                 <button onClick={saveItem} className="px-4 py-2 rounded-lg bg-[#124E66] text-white hover:bg-[#2E3944]">
//                   💾 Save
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Full Page Note View */}
//       <AnimatePresence>
//         {isFullPageMode && selectedNote && (
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[120]">
//             <div className="h-full flex flex-col relative research-theme-bg">
//               {/* Header */}
//               <div className="flex items-center justify-between p-6 border-b border-gray-300">
//                 <div className="flex items-center gap-4">
//                   <button
//                     onClick={closeNoteView}
//                     className={`p-2 rounded-lg transition-colors ${
//                       isBright ? "hover:bg-gray-100 text-gray-600" : "hover:bg-gray-800 text-gray-400"
//                     }`}
//                     title="Back to Notes"
//                   >
//                     ←
//                   </button>

//                   <div>
//                     <h1 className="text-2xl font-bold text-[#212A31]">
//                       {editMode ? (editingNote ? "Editing Note" : "New Note") : selectedNote.title}
//                     </h1>

//                     {!editMode && (
//                       <div className="flex items-center gap-4 mt-1">
//                         <span className="text-sm text-gray-600 opacity-70">{selectedNote.date}</span>

//                         <div className="flex gap-2 flex-wrap">
//                           {(selectedNote.tags || []).map((tag, tagIndex) => (
//                             <span key={tagIndex} className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
//                               {tag}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 {!editMode && isAuthenticated && (
//                   <div className="flex gap-2">
//                     <button
//                       onClick={startEditingNote}
//                       className="px-4 py-2 rounded-lg text-sm font-medium bg-[#212A31] text-white hover:bg-[#2E3944] transition-colors"
//                     >
//                       ✏️ Edit
//                     </button>
//                     <button
//                       onClick={() => {
//                         if (confirm("Are you sure you want to delete this note?")) {
//                           deleteNote(selectedNote.id);
//                           closeNoteView();
//                         }
//                       }}
//                       className={`px-4 py-2 rounded-lg text-sm font-medium ${
//                         isBright ? "bg-red-100 text-red-700 hover:bg-red-200" : "bg-red-900/50 text-red-300 hover:bg-red-800"
//                       } transition-colors`}
//                     >
//                       🗑️ Delete
//                     </button>
//                   </div>
//                 )}
//               </div>

//               {/* Content */}
//               <div className="flex-1 overflow-y-auto modern-scroll">
//                 {editMode ? (
//                   <div className="max-w-4xl mx-auto p-8">
//                     <div className="space-y-6">
//                       <div>
//                         <label className="block text-sm font-medium mb-2 text-[#212A31]">Title</label>
//                         <input
//                           type="text"
//                           value={editForm.title}
//                           onChange={(e) => setEditForm((prev) => ({ ...prev, title: e.target.value }))}
//                           className={`w-full p-4 text-xl font-semibold rounded-lg border ${
//                             isBright
//                               ? "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
//                               : "bg-gray-800 border-gray-600 text-white focus:border-blue-500"
//                           } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
//                           placeholder="Note title..."
//                         />
//                       </div>

//                       <div>
//                         <label className="block text-sm font-medium mb-2 text-[#212A31]">Content</label>
//                         <textarea
//                           value={editForm.content}
//                           onChange={(e) => setEditForm((prev) => ({ ...prev, content: e.target.value }))}
//                           rows={20}
//                           className={`w-full p-4 research-font rounded-lg border resize-y min-h-[400px] ${
//                             isBright
//                               ? "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
//                               : "bg-gray-800 border-gray-600 text-white focus:border-blue-500"
//                           } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
//                           placeholder="Write your note here..."
//                         />
//                       </div>

//                       <div>
//                         <label className="block text-sm font-medium mb-2 text-[#212A31]">Tags (comma separated)</label>
//                         <input
//                           type="text"
//                           value={editForm.tags}
//                           onChange={(e) => setEditForm((prev) => ({ ...prev, tags: e.target.value }))}
//                           className={`w-full p-3 rounded-lg border ${
//                             isBright
//                               ? "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
//                               : "bg-gray-800 border-gray-600 text-white focus:border-blue-500"
//                           } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
//                           placeholder="AI, Research, Notes..."
//                         />
//                       </div>

//                       {/* Image Management */}
//                       <div>
//                         <label className="block text-sm font-medium mb-4 text-[#212A31]">Images</label>
//                         <div className="flex gap-3 mb-4">
//                           <input
//                             ref={fileInputRef}
//                             type="file"
//                             multiple
//                             accept="image/*"
//                             onChange={handleImageUpload}
//                             className="hidden"
//                           />
//                           <button
//                             onClick={() => fileInputRef.current?.click()}
//                             className="px-4 py-2 rounded-lg text-sm font-medium bg-[#748D92] text-[#212A31] hover:bg-[#D3D9D4]"
//                           >
//                             📁 Upload Images
//                           </button>
//                         </div>

//                         <div
//                           className={`text-sm mb-4 p-3 rounded-lg ${
//                             isBright
//                               ? "bg-yellow-50 text-yellow-700 border border-yellow-200"
//                               : "bg-yellow-900/20 text-yellow-300 border border-yellow-700"
//                           }`}
//                         >
//                           💡 Tip: You can also paste images directly (Ctrl+V or Cmd+V)
//                         </div>

//                         {editForm.images.length > 0 && (
//                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                             {editForm.images.map((image, idx) => (
//                               <div key={idx} className="relative group">
//                                 <img src={image} alt={`Upload ${idx + 1}`} className="w-full h-48 object-cover rounded-lg border shadow-sm" />
//                                 <button
//                                   onClick={() =>
//                                     setEditForm((prev) => ({ ...prev, images: prev.images.filter((_, i) => i !== idx) }))
//                                   }
//                                   className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-lg"
//                                 >
//                                   ×
//                                 </button>
//                               </div>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     </div>

//                     <div className="flex justify-end gap-3 mt-8">
//                       <button
//                         onClick={() => {
//                           setEditMode(false);
//                           setEditingNote(null);
//                           setEditForm({ title: "", content: "", tags: "", images: [] });
//                         }}
//                         className={`px-6 py-2 rounded-lg text-sm font-medium ${
//                           isBright ? "bg-gray-300 text-gray-700 hover:bg-gray-400" : "bg-gray-600 text-gray-300 hover:bg-gray-500"
//                         } transition-colors`}
//                       >
//                         Cancel
//                       </button>
//                       <button
//                         onClick={saveNote}
//                         className="px-6 py-2 rounded-lg text-sm font-medium bg-[#124E66] text-white hover:bg-[#2E3944] transition-colors"
//                       >
//                         💾 {editingNote ? "Save Changes" : "Create Note"}
//                       </button>
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="max-w-4xl mx-auto p-8">
//                     {selectedNote.images && selectedNote.images.length > 0 && (
//                       <div className="mb-8">
//                         <div className={`grid gap-6 ${selectedNote.images.length === 1 ? "grid-cols-1" : "md:grid-cols-2"}`}>
//                           {selectedNote.images.map((image, imgIndex) => (
//                             <img key={imgIndex} src={image} alt={`Note image ${imgIndex + 1}`} className="w-full h-80 object-cover rounded-xl shadow-lg" />
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     <div className="research-font whitespace-pre-wrap text-[#212A31] max-w-none">{selectedNote.content}</div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default ResearchSidebar;


import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "../ThemeContext";

/**
 * Fixes in this version:
 * - Notes now have a `category` field and list is grouped by category.
 * - Papers already use `section` but UI now calls it Category and form has editable Category.
 * - Links already use `category` and remains editable.
 * - Edit/Delete buttons are visible (not forced to black) via `.no-force-color`.
 * - Blur behavior:
 *    - Sidebar open => background blurred & non-scrollable (only sidebar scroll works)
 *    - When viewing/editing notes OR open modal/auth => blur is removed
 */

// Modern scrollbar styles and research font
const scrollbarStyles = `
  .modern-scroll::-webkit-scrollbar { width: 8px; }
  .modern-scroll::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.03);
    border-radius: 10px;
  }
  .modern-scroll::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, rgba(196, 181, 253, 0.4), rgba(168, 85, 247, 0.6));
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .modern-scroll::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, rgba(196, 181, 253, 0.6), rgba(168, 85, 247, 0.8));
    box-shadow: 0 0 8px rgba(196, 181, 253, 0.4);
    transform: scaleY(1.1);
  }
  .modern-scroll {
    scrollbar-width: thin;
    scrollbar-color: rgba(196, 181, 253, 0.4) rgba(255, 255, 255, 0.03);
  }

  .research-font {
    font-family: 'Times New Roman', 'Times', 'serif';
    font-size: 1.125rem;
    line-height: 1.75;
  }

  .research-theme-bg { background-color: #D3D9D4; }

  /* Force text black INSIDE the sidebar, but allow opt-out for icons/buttons */
  .research-root, .research-root * {
    color: #111;
  }
  .research-root .no-force-color,
  .research-root .no-force-color * {
    color: inherit !important;
  }
`;

const ResearchSidebar = ({ isOpen, onClose }) => {
  const { isBright } = useTheme();

  // Tabs (Articles hidden)
  const tabs = [
    { id: "notes", label: "Notes", icon: "📝" },
    { id: "papers", label: "Papers", icon: "📚" },
    { id: "links", label: "Links", icon: "🔗" },
  ];

  const [activeTab, setActiveTab] = useState("notes");
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Notes full-page
  const [isFullPageMode, setIsFullPageMode] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  const [editForm, setEditForm] = useState({
    title: "",
    category: "",
    content: "",
    tags: "",
    images: [],
  });

  // Auth
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authPassword, setAuthPassword] = useState("");
  const [pendingEditAction, setPendingEditAction] = useState(null);

  // Add/Edit modal for papers/links
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null); // { tab, id }
  const [itemForm, setItemForm] = useState({});

  const fileInputRef = useRef(null);

  const groupByCategory = (items, key) => {
    return (items || []).reduce((acc, item) => {
      const cat = (item?.[key] || "").trim() || "Uncategorized";
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(item);
      return acc;
    }, {});
  };

  const tabsToCategoryKey = (tab) => {
    if (tab === "notes") return "category";
    if (tab === "papers") return "section"; // stored as section in your data
    if (tab === "links") return "category";
    return "category";
  };

  const defaultFormByTab = (tab) => {
    if (tab === "papers") {
      return {
        title: "",
        authors: "",
        link: "",
        summary: "",
        venue: "",
        pdf: "",
        section: "", // category field for papers
      };
    }
    if (tab === "links") {
      return { title: "", url: "", category: "", description: "" };
    }
    return {};
  };

  // Load content from localStorage or use defaults
  const [researchContent, setResearchContent] = useState(() => {
    const saved = localStorage.getItem("researchContent");
    if (saved) return JSON.parse(saved);

    return {
      notes: [
        {
          id: 1,
          title: "Diffusion Models Deep Dive",
          category: "Generative Models",
          content:
            "Key insights on denoising diffusion probabilistic models and their applications in generative AI...",
          date: "2024-01-15",
          tags: ["Diffusion", "Generative AI"],
          images: [],
        },
        {
          id: 2,
          title: "Reinforcement Learning Fundamentals",
          category: "Reinforcement Learning",
          content:
            "Core concepts of Markov Decision Processes, value functions, and policy gradients...",
          date: "2024-01-10",
          tags: ["RL", "MDP"],
          images: [],
        },
      ],
      articles: [],
      papers: [
        {
          id: 1,
          title: "Attention Is All You Need",
          authors: "Vaswani et al.",
          link: "https://arxiv.org/abs/1706.03762",
          summary: "The original transformer paper that revolutionized NLP.",
          venue: "NeurIPS 2017",
          pdf: "#",
          section: "Natural Language Processing",
        },
        {
          id: 2,
          title: "Denoising Diffusion Probabilistic Models",
          authors: "Ho et al.",
          link: "https://arxiv.org/abs/2006.11239",
          summary: "Groundbreaking work on diffusion models for image generation.",
          venue: "NeurIPS 2020",
          pdf: "#",
          section: "Generative Models",
        },
      ],
      links: [
        {
          id: 1,
          title: "PyTorch Official Documentation",
          url: "https://pytorch.org/docs/",
          category: "Framework",
          description: "Official PyTorch documentation and tutorials.",
        },
        {
          id: 2,
          title: "Hugging Face Models",
          url: "https://huggingface.co/models",
          category: "AI Models",
          description: "Open-source AI models and datasets.",
        },
      ],
    };
  });

  // Save to localStorage whenever content changes
  useEffect(() => {
    localStorage.setItem("researchContent", JSON.stringify(researchContent));
  }, [researchContent]);

  // Blur rules:
  // - When sidebar is open: blur everything except sidebar.
  // - When viewing/editing notes or auth modal or item modal: blur removed.
  const shouldShowSidebarBackdrop =
    isOpen && !isFullPageMode && !showAuthModal && !showAddForm;

  // Prevent background scroll when sidebar blur overlay is active
  useEffect(() => {
    if (!shouldShowSidebarBackdrop) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [shouldShowSidebarBackdrop]);

  // Handle clipboard paste for images (edit mode only)
  useEffect(() => {
    const handlePaste = (e) => {
      if (!editMode) return;
      const items = e.clipboardData?.items;
      if (!items) return;

      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.type.includes("image")) {
          e.preventDefault();
          const blob = item.getAsFile();
          const imageUrl = URL.createObjectURL(blob);
          setEditForm((prev) => ({
            ...prev,
            images: [...prev.images, imageUrl],
          }));
        }
      }
    };

    if (editMode) document.addEventListener("paste", handlePaste);
    return () => document.removeEventListener("paste", handlePaste);
  }, [editMode]);

  // ---- Auth ----
  const requireAuth = (action) => {
    if (isAuthenticated) action();
    else {
      setPendingEditAction(() => action);
      setShowAuthModal(true);
    }
  };

  const handleAuth = () => {
    const correctPassword = import.meta.env.VITE_EDIT_PASSWORD || "admin123";
    if (authPassword === correctPassword) {
      setIsAuthenticated(true);
      setShowAuthModal(false);
      setAuthPassword("");
      if (pendingEditAction) {
        pendingEditAction();
        setPendingEditAction(null);
      }
      alert("✅ Authentication successful! You can now edit content.");
    } else {
      alert("❌ Incorrect password.");
      setAuthPassword("");
    }
  };

  // ---- Notes full-page ----
  const openNoteView = (note) => {
    setSelectedNote(note);
    setIsFullPageMode(true);
    setEditMode(false);
    setEditingNote(null);
  };

  const closeNoteView = () => {
    setSelectedNote(null);
    setIsFullPageMode(false);
    setEditMode(false);
    setEditingNote(null);
    setEditForm({
      title: "",
      category: "",
      content: "",
      tags: "",
      images: [],
    });
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files || []);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setEditForm((prev) => ({ ...prev, images: [...prev.images, ...imageUrls] }));
  };

  const startEditingNote = () => {
    requireAuth(() => {
      if (selectedNote?.id) {
        setEditingNote(selectedNote.id);
        setEditForm({
          title: selectedNote.title || "",
          category: selectedNote.category || "",
          content: selectedNote.content || "",
          tags: (selectedNote.tags || []).join(", "),
          images: selectedNote.images || [],
        });
      } else {
        setEditingNote(null);
        setEditForm({ title: "", category: "", content: "", tags: "", images: [] });
      }
      setEditMode(true);
    });
  };

  const saveNote = () => {
    if (!editForm.title.trim()) return alert("Please enter a title for the note.");
    if (!editForm.category.trim()) return alert("Please enter a category for the note.");
    if (!editForm.content.trim()) return alert("Please enter some content for the note.");

    const tags = editForm.tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const payload = {
      title: editForm.title,
      category: editForm.category.trim(),
      content: editForm.content,
      tags,
      images: editForm.images,
    };

    if (editingNote) {
      setResearchContent((prev) => ({
        ...prev,
        notes: prev.notes.map((n) =>
          n.id === editingNote ? { ...n, ...payload } : n
        ),
      }));

      setSelectedNote((prev) => (prev ? { ...prev, ...payload } : null));

      setEditMode(false);
      setEditingNote(null);
      setEditForm({ title: "", category: "", content: "", tags: "", images: [] });
      return;
    }

    const newNote = {
      id: Date.now(),
      ...payload,
      date: new Date().toISOString().split("T")[0],
    };

    setResearchContent((prev) => ({ ...prev, notes: [newNote, ...prev.notes] }));

    setIsFullPageMode(false);
    setSelectedNote(null);
    setEditMode(false);
    setEditingNote(null);
    setEditForm({ title: "", category: "", content: "", tags: "", images: [] });
  };

  const deleteNote = (noteId) => {
    setResearchContent((prev) => ({
      ...prev,
      notes: prev.notes.filter((n) => n.id !== noteId),
    }));
  };

  // ---- Add/Edit items (papers/links) ----
  const openAddModal = (tab) => {
    requireAuth(() => {
      setEditingItem({ tab, id: null });
      setItemForm(defaultFormByTab(tab));
      setShowAddForm(true);
    });
  };

  const openEditModal = (tab, item) => {
    requireAuth(() => {
      setEditingItem({ tab, id: item.id });
      setItemForm({ ...item });
      setShowAddForm(true);
    });
  };

  const closeItemModal = () => {
    setShowAddForm(false);
    setEditingItem(null);
    setItemForm({});
  };

  const deleteItem = (tab, id) => {
    requireAuth(() => {
      setResearchContent((prev) => ({
        ...prev,
        [tab]: (prev[tab] || []).filter((x) => x.id !== id),
      }));
    });
  };

  const saveItem = () => {
    if (!editingItem?.tab) return;
    const tab = editingItem.tab;

    const mustHave = (k) =>
      typeof itemForm[k] === "string" && itemForm[k].trim().length > 0;

    if (!mustHave("title")) return alert("Title is required.");

    if (tab === "papers") {
      if (!mustHave("authors")) return alert("Authors is required.");
      if (!mustHave("summary")) return alert("Summary is required.");
      if (!mustHave("section")) return alert("Category is required for papers.");
    }

    if (tab === "links") {
      if (!mustHave("url")) return alert("URL is required.");
      if (!mustHave("category")) return alert("Category is required for links.");
    }

    setResearchContent((prev) => {
      const list = prev[tab] || [];
      if (editingItem.id) {
        return {
          ...prev,
          [tab]: list.map((x) =>
            x.id === editingItem.id ? { ...x, ...itemForm, id: editingItem.id } : x
          ),
        };
      }
      const newItem = { ...itemForm, id: Date.now() };
      return { ...prev, [tab]: [newItem, ...list] };
    });

    closeItemModal();
  };

  const renderTabContent = () => {
    const content = researchContent[activeTab] || [];

    switch (activeTab) {
      case "notes": {
        const notesByCat = groupByCategory(content, "category");

        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Research Notes</h2>
                <p className="text-sm opacity-70">
                  {content.length} {content.length === 1 ? "note" : "notes"} across{" "}
                  {Object.keys(notesByCat).length} categories
                </p>
              </div>

              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() =>
                  requireAuth(() => {
                    const blank = {
                      id: null,
                      title: "",
                      category: "",
                      content: "",
                      date: new Date().toISOString().split("T")[0],
                      tags: [],
                      images: [],
                    };
                    setSelectedNote(blank);
                    setEditingNote(null);
                    setEditForm({
                      title: "",
                      category: "",
                      content: "",
                      tags: "",
                      images: [],
                    });
                    setIsFullPageMode(true);
                    setEditMode(true);
                  })
                }
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 bg-[#212A31] text-white hover:bg-[#2E3944] hover:scale-105 shadow-lg no-force-color"
              >
                ✏️ New Note
              </motion.button>
            </div>

            {Object.entries(notesByCat).map(([catName, notes]) => (
              <div key={catName} className="space-y-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold">{catName}</h3>
                  <span className="px-2 py-1 text-xs rounded-full bg-[#124E66] text-white no-force-color">
                    {notes.length}
                  </span>
                </div>

                <div className="space-y-4 ml-2">
                  {notes.map((note, index) => (
                    <motion.article
                      key={note.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.03 }}
                      className="group cursor-pointer transition-all duration-300 hover:scale-[1.01] bg-white/60 hover:bg-white/80 border-gray-300 border rounded-xl p-5 backdrop-blur-sm"
                      onClick={() => openNoteView(note)}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold group-hover:text-blue-700 transition-colors">
                            {note.title}
                          </h4>
                          <div className="flex items-center gap-3 text-sm opacity-70 mt-1">
                            <time>{note.date}</time>
                            <span className="opacity-40">•</span>
                            <span>{note.category || "Uncategorized"}</span>
                          </div>
                        </div>

                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity no-force-color">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              openNoteView(note);
                            }}
                            className={`p-2 rounded-lg text-sm transition-colors ${
                              isBright ? "hover:bg-gray-200 text-gray-700" : "hover:bg-gray-700 text-gray-200"
                            }`}
                            title="Read"
                          >
                            →
                          </button>

                          {isAuthenticated && (
                            <>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  openNoteView(note);
                                  startEditingNote();
                                }}
                                className={`p-2 rounded-lg text-sm transition-colors ${
                                  isBright ? "hover:bg-gray-200 text-gray-700" : "hover:bg-gray-700 text-gray-200"
                                }`}
                                title="Edit"
                              >
                                ✏️
                              </button>

                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (confirm("Are you sure you want to delete this note?")) {
                                    deleteNote(note.id);
                                  }
                                }}
                                className={`p-2 rounded-lg text-sm transition-colors ${
                                  isBright ? "hover:bg-red-100 text-red-700" : "hover:bg-red-900/50 text-red-200"
                                }`}
                                title="Delete"
                              >
                                🗑️
                              </button>
                            </>
                          )}
                        </div>
                      </div>

                      <div
                        className="research-font overflow-hidden opacity-80"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {note.content}
                      </div>

                      <div className="flex gap-2 flex-wrap mt-3">
                        {(note.tags || []).map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs rounded-full font-medium bg-[#748D92] hover:bg-[#D3D9D4] transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      }

      case "papers": {
        // group by `section` (Category)
        const papersByCat = groupByCategory(content, "section");

        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Research Papers</h2>
                <p className="text-sm opacity-70">
                  {content.length} papers across {Object.keys(papersByCat).length} categories
                </p>
              </div>

              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => openAddModal("papers")}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 bg-[#212A31] text-white hover:bg-[#2E3944] hover:scale-105 shadow-lg no-force-color"
              >
                ➕ New Paper
              </motion.button>
            </div>

            {Object.entries(papersByCat).map(([catName, papers]) => (
              <div key={catName} className="space-y-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold">{catName}</h3>
                  <span className="px-2 py-1 text-xs rounded-full bg-[#124E66] text-white no-force-color">
                    {papers.length}
                  </span>
                </div>

                <div className="space-y-3 ml-4">
                  {papers.map((paper, index) => (
                    <motion.article
                      key={paper.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="group p-4 rounded-lg border transition-all duration-300 bg-white/60 border-gray-300 hover:bg-white/80 hover:shadow-md"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold hover:text-blue-700 transition-colors">
                          {paper.title}
                        </h4>

                        {isAuthenticated && (
                          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity no-force-color">
                            <button
                              onClick={() => openEditModal("papers", paper)}
                              className={`p-1 rounded text-xs ${
                                isBright ? "hover:bg-gray-200 text-gray-700" : "hover:bg-gray-700 text-gray-200"
                              }`}
                              title="Edit"
                            >
                              ✏️
                            </button>
                            <button
                              onClick={() => {
                                if (confirm("Delete this paper?")) deleteItem("papers", paper.id);
                              }}
                              className={`p-1 rounded text-xs ${
                                isBright ? "hover:bg-red-100 text-red-700" : "hover:bg-red-900/50 text-red-200"
                              }`}
                              title="Delete"
                            >
                              🗑️
                            </button>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2 mb-2 text-xs opacity-70">
                        <p>{paper.authors}</p>
                        <span className="opacity-40">•</span>
                        <span>{paper.venue}</span>
                      </div>

                      <p className="research-font mb-4">{paper.summary}</p>

                      <div className="flex gap-2 no-force-color">
                        <a
                          href={paper.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 text-xs rounded font-medium bg-blue-100 text-blue-800 hover:bg-blue-200"
                        >
                          ArXiv
                        </a>
                        <a
                          href={paper.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 text-xs rounded font-medium bg-green-100 text-green-800 hover:bg-green-200"
                        >
                          PDF
                        </a>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      }

      case "links":
        return (
          <div className="space-y-4">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => openAddModal("links")}
              className="w-full p-4 rounded-lg border-2 border-dashed border-gray-400 hover:border-blue-500 hover:bg-blue-50/50 transition-all duration-300 no-force-color"
            >
              ➕ Add New Link
            </motion.button>

            {(content || []).map((link, index) => (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-lg border bg-white/60 border-gray-300 hover:bg-white/80 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold">{link.title}</h4>

                  {isAuthenticated && (
                    <div className="flex gap-1 no-force-color">
                      <button
                        onClick={() => openEditModal("links", link)}
                        className="p-1 rounded text-xs hover:bg-gray-200 text-gray-700"
                        title="Edit"
                      >
                        ✏️
                      </button>
                      <button
                        onClick={() => {
                          if (confirm("Delete this link?")) deleteItem("links", link.id);
                        }}
                        className="p-1 rounded text-xs hover:bg-red-100 text-red-700"
                        title="Delete"
                      >
                        🗑️
                      </button>
                    </div>
                  )}
                </div>

                <span className="inline-block px-2 py-1 text-xs rounded-full mb-2 bg-purple-100 text-purple-800">
                  {link.category || "Uncategorized"}
                </span>

                <p className="text-sm mb-3 opacity-80">{link.description}</p>

                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-700 hover:text-blue-900 no-force-color"
                >
                  Visit Link →
                </a>
              </motion.div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="research-root">
      <style dangerouslySetInnerHTML={{ __html: scrollbarStyles }} />

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className={`fixed top-0 right-0 h-full flex flex-col research-theme-bg ${
              isFullscreen ? "w-full z-[100]" : "w-96 z-[90]"
            } border-l border-gray-300 shadow-2xl`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-300">
              <div>
                <h2 className="text-xl font-bold">Research & Notes</h2>
                <p className="text-xs opacity-70">Full-page reading experience</p>
              </div>
              <div className="flex items-center gap-2 no-force-color">
                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className={`p-2 rounded-lg transition-colors ${
                    isBright ? "hover:bg-gray-100 text-gray-700" : "hover:bg-gray-800 text-gray-200"
                  }`}
                  title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                >
                  {isFullscreen ? "🗗" : "⛶"}
                </button>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg transition-colors hover:bg-gray-200 text-gray-700"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-300">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-3 px-4 text-center transition-colors ${
                    activeTab === tab.id
                      ? "bg-[#D3D9D4] border-b-2 border-[#212A31]"
                      : "opacity-70 hover:bg-gray-100"
                  }`}
                >
                  <span className="text-lg mb-1 block">{tab.icon}</span>
                  <span className="text-xs font-medium">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 modern-scroll">
              {renderTabContent()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar Backdrop (blur ON only when sidebar open and not in modals/full-page) */}
      <AnimatePresence>
        {shouldShowSidebarBackdrop && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[80]"
          />
        )}
      </AnimatePresence>

      {/* Authentication Modal */}
      <AnimatePresence>
        {showAuthModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[130] flex items-center justify-center p-4 no-force-color"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAuthModal(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-md p-6 rounded-2xl shadow-2xl bg-white border border-gray-200"
            >
              <h3 className="text-xl font-bold mb-4 text-center">🔐 Authentication Required</h3>
              <p className="text-sm mb-6 text-center text-gray-600">
                Enter the password to access edit mode.
              </p>

              <div className="space-y-4">
                <input
                  type="password"
                  placeholder="Enter password"
                  value={authPassword}
                  onChange={(e) => setAuthPassword(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleAuth()}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />

                <div className="flex gap-3">
                  <button
                    onClick={handleAuth}
                    className="flex-1 px-4 py-2 rounded-lg text-sm font-medium bg-[#212A31] text-white hover:bg-[#2E3944] transition-colors"
                  >
                    Authenticate
                  </button>
                  <button
                    onClick={() => {
                      setShowAuthModal(false);
                      setAuthPassword("");
                    }}
                    className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add/Edit Modal for Papers / Links */}
      <AnimatePresence>
        {showAddForm && editingItem?.tab && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[140] flex items-center justify-center p-4 no-force-color"
          >
            <div
              onClick={closeItemModal}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="relative w-full max-w-2xl rounded-2xl shadow-2xl border border-gray-200 bg-white p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {editingItem.id ? "Edit" : "Add"}{" "}
                    {editingItem.tab === "papers" ? "Paper" : "Link"}
                  </h3>
                  <p className="text-sm text-gray-600">Saved to localStorage.</p>
                </div>
                <button
                  onClick={closeItemModal}
                  className="p-2 rounded-lg hover:bg-gray-100 text-gray-700"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-800">
                    Title
                  </label>
                  <input
                    value={itemForm.title || ""}
                    onChange={(e) => setItemForm((p) => ({ ...p, title: e.target.value }))}
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-gray-900"
                    placeholder="Title..."
                  />
                </div>

                {editingItem.tab === "papers" && (
                  <>
                    <div>
                      <label className="block text-sm font-medium mb-1 text-gray-800">
                        Category
                      </label>
                      <input
                        value={itemForm.section || ""}
                        onChange={(e) => setItemForm((p) => ({ ...p, section: e.target.value }))}
                        className="w-full p-3 rounded-lg border border-gray-300 text-gray-900"
                        placeholder="Generative Models, NLP, RL..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1 text-gray-800">
                        Authors
                      </label>
                      <input
                        value={itemForm.authors || ""}
                        onChange={(e) => setItemForm((p) => ({ ...p, authors: e.target.value }))}
                        className="w-full p-3 rounded-lg border border-gray-300 text-gray-900"
                        placeholder="Ho et al."
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1 text-gray-800">
                          Venue
                        </label>
                        <input
                          value={itemForm.venue || ""}
                          onChange={(e) => setItemForm((p) => ({ ...p, venue: e.target.value }))}
                          className="w-full p-3 rounded-lg border border-gray-300 text-gray-900"
                          placeholder="NeurIPS 2020"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1 text-gray-800">
                          PDF Link
                        </label>
                        <input
                          value={itemForm.pdf || ""}
                          onChange={(e) => setItemForm((p) => ({ ...p, pdf: e.target.value }))}
                          className="w-full p-3 rounded-lg border border-gray-300 text-gray-900"
                          placeholder="https://..."
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1 text-gray-800">
                        ArXiv Link
                      </label>
                      <input
                        value={itemForm.link || ""}
                        onChange={(e) => setItemForm((p) => ({ ...p, link: e.target.value }))}
                        className="w-full p-3 rounded-lg border border-gray-300 text-gray-900"
                        placeholder="https://arxiv.org/abs/..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1 text-gray-800">
                        Summary
                      </label>
                      <textarea
                        value={itemForm.summary || ""}
                        onChange={(e) => setItemForm((p) => ({ ...p, summary: e.target.value }))}
                        rows={5}
                        className="w-full p-3 rounded-lg border border-gray-300 text-gray-900"
                        placeholder="Short summary..."
                      />
                    </div>
                  </>
                )}

                {editingItem.tab === "links" && (
                  <>
                    <div>
                      <label className="block text-sm font-medium mb-1 text-gray-800">
                        Category
                      </label>
                      <input
                        value={itemForm.category || ""}
                        onChange={(e) => setItemForm((p) => ({ ...p, category: e.target.value }))}
                        className="w-full p-3 rounded-lg border border-gray-300 text-gray-900"
                        placeholder="Framework, Tools..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1 text-gray-800">
                        URL
                      </label>
                      <input
                        value={itemForm.url || ""}
                        onChange={(e) => setItemForm((p) => ({ ...p, url: e.target.value }))}
                        className="w-full p-3 rounded-lg border border-gray-300 text-gray-900"
                        placeholder="https://..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1 text-gray-800">
                        Description
                      </label>
                      <textarea
                        value={itemForm.description || ""}
                        onChange={(e) => setItemForm((p) => ({ ...p, description: e.target.value }))}
                        rows={4}
                        className="w-full p-3 rounded-lg border border-gray-300 text-gray-900"
                        placeholder="What is this link?"
                      />
                    </div>
                  </>
                )}
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={closeItemModal}
                  className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={saveItem}
                  className="px-4 py-2 rounded-lg bg-[#124E66] text-white hover:bg-[#2E3944]"
                >
                  💾 Save
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Page Note View */}
      <AnimatePresence>
        {isFullPageMode && selectedNote && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120]"
          >
            <div className="h-full flex flex-col relative research-theme-bg">
              <div className="flex items-center justify-between p-6 border-b border-gray-300">
                <div className="flex items-center gap-4 no-force-color">
                  <button
                    onClick={closeNoteView}
                    className={`p-2 rounded-lg transition-colors ${
                      isBright ? "hover:bg-gray-100 text-gray-700" : "hover:bg-gray-800 text-gray-200"
                    }`}
                    title="Back"
                  >
                    ←
                  </button>

                  <div className="no-force-color">
                    <h1 className="text-2xl font-bold text-gray-900">
                      {editMode
                        ? editingNote
                          ? "Editing Note"
                          : "New Note"
                        : selectedNote.title}
                    </h1>

                    {!editMode && (
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-sm text-gray-600">{selectedNote.date}</span>
                        <span className="text-sm text-gray-600">•</span>
                        <span className="text-sm text-gray-700 font-medium">
                          {selectedNote.category || "Uncategorized"}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {!editMode && isAuthenticated && (
                  <div className="flex gap-2 no-force-color">
                    <button
                      onClick={startEditingNote}
                      className="px-4 py-2 rounded-lg text-sm font-medium bg-[#212A31] text-white hover:bg-[#2E3944] transition-colors"
                    >
                      ✏️ Edit
                    </button>
                    <button
                      onClick={() => {
                        if (confirm("Are you sure you want to delete this note?")) {
                          deleteNote(selectedNote.id);
                          closeNoteView();
                        }
                      }}
                      className="px-4 py-2 rounded-lg text-sm font-medium bg-red-100 text-red-800 hover:bg-red-200 transition-colors"
                    >
                      🗑️ Delete
                    </button>
                  </div>
                )}
              </div>

              <div className="flex-1 overflow-y-auto modern-scroll">
                {editMode ? (
                  <div className="max-w-4xl mx-auto p-8 no-force-color">
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-800">
                          Title
                        </label>
                        <input
                          type="text"
                          value={editForm.title}
                          onChange={(e) => setEditForm((p) => ({ ...p, title: e.target.value }))}
                          className="w-full p-4 text-xl font-semibold rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-gray-900"
                          placeholder="Note title..."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-800">
                          Category
                        </label>
                        <input
                          type="text"
                          value={editForm.category}
                          onChange={(e) => setEditForm((p) => ({ ...p, category: e.target.value }))}
                          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-gray-900"
                          placeholder="Generative Models, RL, Systems..."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-800">
                          Content
                        </label>
                        <textarea
                          value={editForm.content}
                          onChange={(e) => setEditForm((p) => ({ ...p, content: e.target.value }))}
                          rows={20}
                          className="w-full p-4 research-font rounded-lg border border-gray-300 resize-y min-h-[400px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-gray-900"
                          placeholder="Write your note here..."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-800">
                          Tags (comma separated)
                        </label>
                        <input
                          type="text"
                          value={editForm.tags}
                          onChange={(e) => setEditForm((p) => ({ ...p, tags: e.target.value }))}
                          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-gray-900"
                          placeholder="AI, Research, Notes..."
                        />
                      </div>

                      {/* Image Management */}
                      <div>
                        <label className="block text-sm font-medium mb-4 text-gray-800">
                          Images
                        </label>
                        <div className="flex gap-3 mb-4">
                          <input
                            ref={fileInputRef}
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                          />
                          <button
                            onClick={() => fileInputRef.current?.click()}
                            className="px-4 py-2 rounded-lg text-sm font-medium bg-[#748D92] text-[#111] hover:bg-[#D3D9D4]"
                          >
                            📁 Upload Images
                          </button>
                        </div>

                        <div className="text-sm mb-4 p-3 rounded-lg bg-yellow-50 text-yellow-800 border border-yellow-200">
                          💡 Tip: You can also paste images directly (Ctrl+V or Cmd+V)
                        </div>

                        {editForm.images.length > 0 && (
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {editForm.images.map((image, idx) => (
                              <div key={idx} className="relative group">
                                <img
                                  src={image}
                                  alt={`Upload ${idx + 1}`}
                                  className="w-full h-48 object-cover rounded-lg border shadow-sm"
                                />
                                <button
                                  onClick={() =>
                                    setEditForm((prev) => ({
                                      ...prev,
                                      images: prev.images.filter((_, i) => i !== idx),
                                    }))
                                  }
                                  className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-lg"
                                >
                                  ×
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-end gap-3 mt-8">
                      <button
                        onClick={() => {
                          setEditMode(false);
                          setEditingNote(null);
                          setEditForm({ title: "", category: "", content: "", tags: "", images: [] });
                        }}
                        className="px-6 py-2 rounded-lg text-sm font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={saveNote}
                        className="px-6 py-2 rounded-lg text-sm font-medium bg-[#124E66] text-white hover:bg-[#2E3944] transition-colors"
                      >
                        💾 {editingNote ? "Save Changes" : "Create Note"}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="max-w-4xl mx-auto p-8">
                    {selectedNote.images && selectedNote.images.length > 0 && (
                      <div className="mb-8">
                        <div
                          className={`grid gap-6 ${
                            selectedNote.images.length === 1 ? "grid-cols-1" : "md:grid-cols-2"
                          }`}
                        >
                          {selectedNote.images.map((image, i) => (
                            <img
                              key={i}
                              src={image}
                              alt={`Note image ${i + 1}`}
                              className="w-full h-80 object-cover rounded-xl shadow-lg"
                            />
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="research-font whitespace-pre-wrap max-w-none">
                      {selectedNote.content}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResearchSidebar;

