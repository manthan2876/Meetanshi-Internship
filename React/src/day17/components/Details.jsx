import { useState, useEffect } from "react";

export default function Details({ details = {} }) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        education: [],
        experience: [],
        skills: [],
        projects: [],
        summary: ""
    });

    useEffect(() => {
        setForm({
            name: details.name || "",
            email: details.email || "",
            phone: details.phone || "",
            education: details.education || [],
            experience: details.experience || [],
            skills: details.skills || [],
            projects: details.projects || [],
            summary: details.summary || ""
        });
    }, [details]);

    const handleChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleArrayChange = (key, index, field, value) => {
        const updated = [...form[key]];
        updated[index][field] = value;
        setForm((prev) => ({ ...prev, [key]: updated }));
    };

    const handleSkillChange = (index, value) => {
        const updated = [...form.skills];
        updated[index] = value;
        setForm((prev) => ({ ...prev, skills: updated }));
    };

    const handleAddArrayItem = (key, template) => {
        setForm((prev) => ({
            ...prev,
            [key]: [...prev[key], template]
        }));
    };

    return (
        <div className="my-8 p-8 bg-white rounded-xl shadow-lg border border-gray-200 w-3/4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Resume Details</h2>

            <form className="space-y-6">
                {/* Basic Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 hover:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Full Name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                        <input
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            type="email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 hover:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="your.email@example.com"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
                    <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 hover:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Phone Number"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Professional Summary</label>
                    <textarea
                        name="summary"
                        value={form.summary}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 hover:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        placeholder="Brief professional summary..."
                    />
                </div>

                {/* Education */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Education</h3>

                    {form.education.map((edu, i) => (

                        <div key={i}>
                            {i === 0 && <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-1 text-sm text-gray-600 font-medium">
                                <div>Standard / Degree</div>
                                <div>School / University</div>
                                <div>Score</div>
                                <div>Passing Year</div>
                            </div>}
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-2">
                                <input
                                    value={edu.degree}
                                    onChange={(e) => handleArrayChange("education", i, "degree", e.target.value)}
                                    className="px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 hover:bg-white focus:ring-2 focus:ring-blue-500"
                                    placeholder="Degree"
                                />
                                <input
                                    value={edu.university}
                                    onChange={(e) => handleArrayChange("education", i, "university", e.target.value)}
                                    className="px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 hover:bg-white focus:ring-2 focus:ring-blue-500"
                                    placeholder="University"
                                />
                                <input
                                    value={edu.score}
                                    onChange={(e) => handleArrayChange("education", i, "graduation_year", e.target.value)}
                                    className="px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 hover:bg-white focus:ring-2 focus:ring-blue-500"
                                    placeholder="Year"
                                />
                                <input
                                    value={edu.graduation_year}
                                    onChange={(e) => handleArrayChange("education", i, "score", e.target.value)}
                                    className="px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 hover:bg-white focus:ring-2 focus:ring-blue-500"
                                    placeholder="Score/Percentage"
                                />
                            </div>
                        </div>
                    ))}

                    <button
                        type="button"
                        onClick={() => handleAddArrayItem("education", { degree: "", university: "", graduation_year: "", score: "" })}
                        className="mt-1 text-sm px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                    >
                        + Add Education
                    </button>
                </div>

                {/* Experience */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Experience</h3>

                    {form.experience.map((exp, i) => (
                        <div key={i} className="mb-6 space-y-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Title / Role</label>
                                    <input
                                        value={exp.title}
                                        onChange={(e) => handleArrayChange("experience", i, "title", e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
                                        placeholder="Job Title"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Company</label>
                                    <input
                                        value={exp.company}
                                        onChange={(e) => handleArrayChange("experience", i, "company", e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
                                        placeholder="Company"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Start Date</label>
                                    <input
                                        value={exp.start_date}
                                        onChange={(e) => handleArrayChange("experience", i, "start_date", e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
                                        placeholder="Start Date"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">End Date</label>
                                    <input
                                        value={exp.end_date}
                                        onChange={(e) => handleArrayChange("experience", i, "end_date", e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
                                        placeholder="End Date"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Responsibilities</label>
                                <textarea
                                    rows="3"
                                    value={exp.responsibilities?.join("\n")}
                                    onChange={(e) => handleArrayChange("experience", i, "responsibilities", e.target.value.split("\n"))}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 resize-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Each line will be treated as a separate responsibility"
                                />
                            </div>
                            <div className="border-b border-gray-300"></div>
                        </div>
                    ))}

                    <button
                        type="button"
                        onClick={() => handleAddArrayItem("experience", { title: "", company: "", start_date: "", end_date: "", responsibilities: [] })}
                        className="mt-1 text-sm px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                    >
                        + Add Experience
                    </button>
                </div>

                {/* Skills */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Skills / Tools</h3>
                    {form.skills.map((skill, i) => (
                        <input
                            key={i}
                            value={skill}
                            onChange={(e) => handleSkillChange(i, e.target.value)}
                            className="w-fit mb-2 mr-2 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
                            placeholder={`Skill ${i + 1}`}
                        />
                    ))}
                    <button
                        type="button"
                        onClick={() => handleAddArrayItem("skills", "")}
                        className="mt-1 text-sm px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                    >
                        + Add Skill
                    </button>
                </div>

                {/* Projects */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Projects</h3>

                    {form.projects.map((proj, i) => (
                        <div key={i} className="mb-6 space-y-2">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Project Title</label>
                                <input
                                    value={proj.title}
                                    onChange={(e) => handleArrayChange("projects", i, "title", e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
                                    placeholder="Project Title"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Description</label>
                                <textarea
                                    value={proj.description}
                                    onChange={(e) => handleArrayChange("projects", i, "description", e.target.value)}
                                    rows="2"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
                                    placeholder="Project Description"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Link</label>
                                <input
                                    value={proj.link}
                                    onChange={(e) => handleArrayChange("projects", i, "link", e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
                                    placeholder="Project Link (optional)"
                                />
                            </div>
                            <div className="border-b border-gray-300"></div>
                        </div>
                    ))}

                    <button
                        type="button"
                        onClick={() => handleAddArrayItem("projects", { title: "", description: "", link: "" })}
                        className="mt-1 text-sm px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                    >
                        + Add Project
                    </button>
                </div>


                {/* Save & Reset */}
                <div className="flex gap-4 pt-6">
                    <button
                        type="submit"
                        className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg focus:outline-none shadow-md transform hover:scale-105 transition-all duration-200"
                    >
                        Save Details
                    </button>
                    <button
                        type="button"
                        onClick={() =>
                            setForm({
                                name: "",
                                email: "",
                                phone: "",
                                education: [],
                                experience: [],
                                skills: [],
                                projects: [],
                                summary: ""
                            })
                        }
                        className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 focus:outline-none"
                    >
                        Reset
                    </button>
                </div>
            </form>
        </div>
    );
}
