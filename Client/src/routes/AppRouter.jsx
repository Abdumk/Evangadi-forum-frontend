import { Routes, Route } from "react-router-dom";
import Terms from "../components/Footer/Terms.jsx";
import QuestionAndAnswer from "../Pages/QuestionAndAnswer/QuestionAndAnswer.jsx";
import AskQuestion from "../Pages/Question/AskQuestion/AskQuestion.jsx";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword.jsx";
import PageNotFound from "../Pages/PageNotFound/PageNotFound.jsx";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy.jsx";
import Home from "../Pages/Home/Home.jsx";
import AuthLayout from '../Pages/AuthLayout/AuthLayout.jsx'
import HowItWorks from '../Pages/HowItWorks/HowItWorks.jsx'

function AppRouter() {
  const homeUrlForGitPage = "Evangadi-forum-frontend"
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="/ask" element={<AskQuestion />} />
      <Route path="/question/:questionId" element={<QuestionAndAnswer />} />
      <Route path="/howitworks" element={<HowItWorks />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      <Route path="/auth" element={<AuthLayout />} />
      <Route path="/forgetPass" element={<ForgotPassword />} />
      <Route path="*" element={<PageNotFound />} /> */}
      <Route path={`/${homeUrlForGitPage}`} element={<Home />} />
      <Route path={`/${homeUrlForGitPage}/ask`} element={<AskQuestion />} />
      <Route path={`/${homeUrlForGitPage}/question/:questionId`} element={<QuestionAndAnswer />} />
      <Route path={`/${homeUrlForGitPage}/howitworks`} element={<HowItWorks />} />
      <Route path={`/${homeUrlForGitPage}/terms`} element={<Terms />} />
      <Route path={`/${homeUrlForGitPage}/PrivacyPolicy`} element={<PrivacyPolicy />} />
      <Route path={`/${homeUrlForGitPage}/auth`} element={<AuthLayout />} />
      <Route path={`/${homeUrlForGitPage}/forgetPass`} element={<ForgotPassword />} />
      <Route path={`/${homeUrlForGitPage}/*`} element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRouter;
