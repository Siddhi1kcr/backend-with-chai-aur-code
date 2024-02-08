class ApiError extends Error{
    constructor(
        statusCode,
        message="Something went wrong",
        error=[],
        stack=""
    ){
        super(message)
        this.message = message
        this.error = error
        this.statusCode = statusCode
        this.data = null
        this.success = false

        // if(stack){
        //     this.stack = stack
        // }
        // else{
        //     Error.captureStackTrace(this,this.constructor)
        // }

    }
}

export {ApiError}