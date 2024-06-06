import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="flex justify-center gap-3 p-4 border-b border-slate-400">
      <Button variant={"link"} disabled={true}>
        Highlights
      </Button>
      <Button variant={"link"}>Everyone</Button>
    </div>
  );
};

export default Header;
