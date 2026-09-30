import { Route, Routes } from 'react-router-dom'

import { AvatarScreen } from '@/ui/screens/AvatarScreen'
import { GradeScreen } from '@/ui/screens/GradeScreen'
import { HomeScreen } from '@/ui/screens/HomeScreen'
import { LessonScreen } from '@/ui/screens/LessonScreen'
import { ProgressScreen } from '@/ui/screens/ProgressScreen'
import { SubjectsScreen } from '@/ui/screens/SubjectsScreen'

export function App() {
  return (
    <Routes>
      <Route element={<HomeScreen />} path="/" />
      <Route element={<SubjectsScreen />} path="/subjects" />
      <Route element={<GradeScreen />} path="/math" />
      <Route element={<LessonScreen />} path="/lesson/:id" />
      <Route element={<AvatarScreen />} path="/avatar" />
      <Route element={<ProgressScreen />} path="/progress" />
    </Routes>
  )
}
