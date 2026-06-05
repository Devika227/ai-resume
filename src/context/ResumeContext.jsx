import { createContext, useContext, useState } from 'react'
import { useAuth } from './AuthContext.jsx'
import api from '../services/api.js'

const ResumeContext = createContext()

export function ResumeProvider({ children }) {
  const { user } = useAuth()
  const [resumeFile, setResumeFile] = useState(null)
  const [jobDescription, setJobDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState(null)

  async function uploadResume(file) {
    const formData = new FormData()
    formData.append('resume', file)

    const headers = {
      Authorization: `Bearer ${user?.token || 'demo-token'}`,
    }

    const response = await api.post('/resume/upload', formData, { headers })
    return response.data.text
  }

  async function analyze() {
    if (!resumeFile || !jobDescription) {
      return
    }

    setLoading(true)

    try {
      const resumeText = await uploadResume(resumeFile)
      const headers = {
        Authorization: `Bearer ${user?.token || 'demo-token'}`,
      }

      const response = await api.post(
        '/resume/analyze',
        { resumeText, jobDescription },
        { headers }
      )

      const analysis = response.data
      setResults({
        score: analysis.matchScore ?? 0,
        matched: analysis.matchingSkills ?? [],
        missing: analysis.missingSkills ?? [],
        suggestions: analysis.improvements ?? [],
        questions: analysis.interviewQuestions ?? [],
      })
    } catch (error) {
      console.error('Resume analysis failed:', error)
      setResults(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <ResumeContext.Provider
      value={{
        resumeFile,
        setResumeFile,
        jobDescription,
        setJobDescription,
        analyze,
        loading,
        results,
      }}
    >
      {children}
    </ResumeContext.Provider>
  )
}

export function useResume() {
	return useContext(ResumeContext)
}

export default ResumeContext

