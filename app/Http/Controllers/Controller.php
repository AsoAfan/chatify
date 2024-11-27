<?php

namespace App\Http\Controllers;

abstract class Controller
{

    public function created($data = [], $message = "Created", $code = 201)
    {
        return $this->jsonify([
            'message' => $message,
            'data' => $data,
            'code' => $code
        ]);
    }

    private function jsonify($response)
    {
        return response()->json($response, $response["code"]);
    }

    protected function success($data = [], $message = "Success", $code = 200)
    {
        return $this->jsonify([
            'message' => $message,
            'data' => $data,
            'code' => $code
        ]);
    }

    protected function noContent($message = "No Content", $code = 204)
    {
        return $this->jsonify([
            'message' => $message,
            'code' => $code
        ]);
    }

    protected function forbidden($message = "Forbidden", $data = [], $code = 403)
    {
        return $this->jsonify([
            "message" => $message,
            "data" => $data,
            "code" => $code
        ]);
    }
}
