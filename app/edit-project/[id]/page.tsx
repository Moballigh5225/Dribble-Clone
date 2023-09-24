import { redirect } from "next/navigation";
import Modal from "@/components/Modal";
import ProjectForm from "@/components/ProjectForm";
import { getCurrentUser } from "@/lib/session";
import { getProjectDetails } from "@/lib/actions";
import { ProjectInterface } from "@/common.types";

const CreateProject = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const session = await getCurrentUser();
  if (!session?.user) redirect("/");
  const result = (await getProjectDetails(id)) as {
    project?: ProjectInterface;
  };
  return (
    <div>
      <Modal>
        <h3 className="modal-head-text">Create a New Project</h3>
        <ProjectForm type="edit" session={session} project={result?.project} />
      </Modal>
    </div>
  );
};

export default CreateProject;
