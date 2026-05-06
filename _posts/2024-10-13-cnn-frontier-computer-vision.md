---
layout: post
title: "The Next Frontier in Computer Vision: Are CNNs Ready to Take the Lead?"
date: 2024-10-13
description: How can we empower CNNs to learn like transformers, overcome their inherent limitations, and leverage large-scale data and models with billions of parameters?
tags: [computer-vision, CNN, deep-learning, transformers, InternImage]
categories: research
thumbnail: assets/img/blog/cnn-frontier/hero.png
---

{% include figure.liquid path="assets/img/blog/cnn-frontier/hero.png" class="img-fluid rounded z-depth-1" %}

With the extraordinary success of Transformer architectures in large language models for NLP, Vision Transformers (ViTs) have rapidly gained prominence in computer vision, becoming a standard for research and development in large-scale vision models. Some researchers have made significant contributions in scaling ViTs to over a billion parameters, leveraging massive datasets to achieve substantial performance gains. This has led to the belief that CNN-based architectures are inferior to ViTs when dealing with vast amounts of data and the capacity for large-scale models.

{% include figure.liquid path="assets/img/blog/cnn-frontier/vit-scaling.png" class="img-fluid rounded z-depth-1" %}

However, a recent study titled **"InternImage: Exploring Large-Scale Vision Foundation Models with Deformable Convolutions"** published at CVPR 2023, challenges this belief. The study argues that CNNs can achieve comparable, or even superior, performance when enhanced with architectural designs inspired by transformers, scaled up in terms of parameters, and trained on massive datasets.

The goal of this study is to extend Convolutional Neural Networks (CNNs) to large-scale foundation models that can leverage both increased model size and web-scale data. InternImage introduces sparse convolution with a 3×3 window size, featuring the following powerful properties:

- **Flexible sampling offsets:** These offsets can dynamically learn effective receptive fields, accommodating both short-range and long-range dependencies.
- **Adaptive adjustments:** The sampling offsets and modulation scalars are adjusted based on the input data, enabling adaptive spatial aggregation similar to Vision Transformers (ViTs), therefore reducing the inherent inductive bias typically associated with CNNs.
- **Efficiency of a 3×3 convolution kernel:** This choice minimizes optimization costs and reduces the computational overhead associated with large, dense kernels.

Before diving deeper into sparse convolution and InternImage architecture, let's understand some important concepts.

---

## Convolution

The convolution operation involves multiplying (convolving) kernel values with input image pixel values and summing up the result. A kernel strides over an image to calculate the output feature map. A picture is worth a thousand words — let's understand this by the following visualization.

{% include figure.liquid path="assets/img/blog/cnn-frontier/convolution-visualization.jpeg" class="img-fluid rounded z-depth-1" %}

{% include figure.liquid path="assets/img/blog/cnn-frontier/convolution-animation.gif" class="img-fluid rounded z-depth-1" %}

---

## Limitations of Convolutions

The receptive field of Convolutional Neural Networks (CNNs) is small when stacked with standard convolutions with small kernel sizes (usually 3×3). Even with very deep networks, CNN-based architectures cannot obtain long-range dependencies like Vision Transformers (ViTs). In addition, CNNs possess strong inductive bias properties such as 2D locality, translation equivalence, and neighbourhood structure. These properties make them converge faster and train with less data than ViTs. However, they also limit CNN's ability to learn more robust features and general patterns from large-scale data.

---

## Deformable Convolution

Deformable convolution is the same as standard convolution except it dynamically adjusts its sampling location by learnable offsets to better capture the spatial relationships of input data. In the Deformable Convolution v2 (DCNv2) paper, it is expressed as:

$$y(p_0) = \sum_{k=1}^{K} w_k \, m_k \, x(p_0 + p_k + \Delta p_k)$$

This equation gives a couple of nice properties that were missing in standard convolution:

- **Learnable offset:** For learning long-range dependencies, the sample offset is learnable and can interact with short- or long-range features.
- **Adaptive spatial aggregation:** Both the modulation scalar and sampling offset are learnable and conditioned on the input $$X$$.

These unique features make DCN share similar favourable characteristics as multi-head self-attention (MHSA) in transformer models.

{% include figure.liquid path="assets/img/blog/cnn-frontier/deformable-convolution.jpeg" class="img-fluid rounded z-depth-1" %}

Inspired by this, InternImage advances DCNv2 to create the **DCNv3** operator that powers CNNs to overcome the inherent limitations of standard convolution and share similar properties with MHSA.

---

## Deformable Convolution v3 (DCNv3)

DCNv3 is built on DCNv2 with the following additional features:

**1. Sharing weights among convolutional neurons**
In DCNv2, different neurons have independent linear projections, making computation and memory linear with respect to the number of sampling points — limiting efficiency when scaling the model. To address this, the original convolution weights are divided into depth-wise and point-wise parts. The depth-wise component is governed by the original location-aware modulation scalar, while the point-wise component utilises shared projection weights across all sampling points.

**2. Multi-group mechanism**
The spatial aggregation process is divided into $$G$$ groups, where each group has its own modulation scalar and sampling offset, giving different spatial aggregation patterns on the same convolution layer. This helps learn strong features for visual recognition tasks.

**3. Normalising modulation scalars along sampling points**
In DCNv2, modulation scalars are element-wise normalised using a sigmoid activation function, where each modulation scalar varies between 0 and 1. The sum of normalised modulation scalars varies from 0 to K, making training unstable at scale. To remedy this, the sigmoid function is replaced with a softmax function, constraining the sum of all modulation scalars to 1, making the training process more stable.

With these modifications, the DCNv3 operator can be expressed as:

$$y(p_0) = \sum_{g=1}^{G} \sum_{k=1}^{K} w_g \, m_{gk} \, x_g(p_0 + p_k + \Delta p_{gk})$$

---

## Basic Block of InternImage

The design of the basic block of InternImage is closer to ViTs, incorporating advanced components such as Layer Normalisation (LN), Multi-Layer Perceptron (MLP), and GELU activation.

{% include figure.liquid path="assets/img/blog/cnn-frontier/internimage-basic-block.jpeg" class="img-fluid rounded z-depth-1" %}

As can be observed from the figure above, the MHSA is replaced with the DCNv3 operator which predicts sampling offsets and modulation scalars based on the given input $$X$$. InternImage utilises such basic blocks to create a robust feature extraction backbone for downstream tasks such as object detection, classification, and segmentation.

---

## Results

InternImage ranks 2nd in semantic segmentation on ADE20K and in object detection on the COCO validation leaderboard on *Papers with Code*, beating their ViT counterparts on classification, object detection, and semantic segmentation tasks.

{% include figure.liquid path="assets/img/blog/cnn-frontier/results-1.jpeg" class="img-fluid rounded z-depth-1" %}

{% include figure.liquid path="assets/img/blog/cnn-frontier/results-2.jpeg" class="img-fluid rounded z-depth-1" %}

---

## Conclusion

InternImage marks the beginning of CNN-based foundation models for computer vision tasks that share similar properties with transformer design. When trained with a massive dataset, the model can obtain comparable or even better results on visual recognition tasks than ViT-based architectures — pointing to a future where CNNs could take the lead when carefully designed and trained with massive datasets. Nonetheless, these large CNN-based models are still in an early stage, there is significant room for improvement, and InternImage could be a good starting point for further CNN-based large vision model development.

---

## References

1. Wang, Wenhai, et al. "InternImage: Exploring Large-Scale Vision Foundation Models with Deformable Convolutions." *Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition*. 2023.
2. Zhu, Xizhou, et al. "Deformable ConvNets v2: More Deformable, Better Results." *Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition*. 2019.
3. Dosovitskiy, Alexey. "An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale." *arXiv preprint arXiv:2010.11929* (2020).
