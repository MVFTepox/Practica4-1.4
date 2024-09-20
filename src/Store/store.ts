import { defineStore } from "pinia";

interface FormData {
    id: number;
    email: string;
    username: string;
    phone: string;
    message: string;
}
export const useFormStore = defineStore("formStore", {
    state: () => ({
        submissions: [] as FormData[]
    }),
    actions: {
        addSubmission(data: FormData) {
            this.submissions.push(data);
            localStorage.setItem("submissions", JSON.stringify(this.submissions));
        },
        getSubmissionById(id: number) {
            return this.submissions.find(submission => submission.id === id);
        },
        deleteSubmissionById(id: number) {
            this.submissions = this.submissions.filter(submission => submission.id !== id);
            localStorage.removeItem("submissions, JSON.stringify(this.submissions)");
            }
    }
});
