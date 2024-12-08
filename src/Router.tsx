import { FC } from "react";
import { Route, Routes } from "react-router";

import Feed from "./pages/Feed";

const Router: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Feed />}/>
        </Routes>
    )
}

export default Router