import { allTrainings } from "content-collections";

import { TrainingItem } from "./training-item";

export default function TrainingsMain() {
    return (
        <div className="flex flex-col gap-4">
            {allTrainings.map((item) => (
                <TrainingItem
                    key={`${item.serial} - ${item.title}`}
                    {...item}
                />
            ))}
        </div>
    );
}
