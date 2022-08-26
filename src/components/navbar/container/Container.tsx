import { default as containerStyles } from "./Container.module.css";
export const Container = ({ children }: { children: React.ReactNode }) => {
    const { container } = containerStyles;
    return <div className={`${container}`}>{children}</div>
}