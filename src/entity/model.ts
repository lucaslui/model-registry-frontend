export type Model = {
    id?: string

    model_information: {
        author?: string
        registry_date?: string
        last_update?: string
        model_type?: string
        version?: number
        features?: {
            pk?: string,
            categorical?: string[],
            numerical?: string[],
            output?: {
                predict?: string,
                target?: string
            }
        }
    }

    model_artifacts: {
        data_train_path?: string
        data_test_path?: string
        model_path?: string
        wkf_source?: string
    }

    models_status: {
        model?: string
        monitoring?: string
    }

    model_alerts: {
        sns_arn?: string[]
    }

    model_metrics: {
        train_metrics?: {
            gini?: number
        }
        test_metrics?: {
            gini?: number
        }
    }

    model_monitoring: {
        drift_test?: boolean
        quality_test?: boolean
        target_test?: boolean
        stattest?: string
    }

    model_parameters: {
        lib_name?: string
        model_class_name?: string
        hyperparameter?: {
            [key: string]: unknown
        }
    }
}

