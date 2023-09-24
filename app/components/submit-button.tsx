import { useIsSubmitting } from "remix-validated-form";


type SubmitButtonProps = {
    label: string;
};

export const SubmitButton = ({ 
    label 
}: SubmitButtonProps) => {

    const isSubmitting = useIsSubmitting();

    return (
        <button
            className="px-4 w-full py-2 mb-8 mt-4 text-lg font-bold text-white rounded bg-elsa-desert hover:bg-elsa-earth"
            type="submit"
            disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : label}
        </button>
    );

};